var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddResponseCaching();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//My Services
//Whenever we ask a service, the DI system serves an InMemoryRepository instance
builder.Services.AddAuthentication().AddJwtBearer();

builder.Services.AddCors(options =>
{
    var frontendURL = builder.Configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.Map("/circuit", app =>
{
    app.Run(async context =>
    {
        await context.Response.WriteAsync("I am short circuting the pipeline");
    });
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.Run();
