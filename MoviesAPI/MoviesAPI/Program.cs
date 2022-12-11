using Microsoft.AspNetCore.Authentication;
using MoviesAPI.Filters;
using MoviesAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddResponseCaching();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//My Services
//Whenever we ask IRepository service, the DI system serves an InMemoryRepository instance
builder.Services.AddSingleton<IRepository, InMemoryRepository>();
builder.Services.AddTransient<MyActionFilter>();
builder.Services.AddAuthentication().AddJwtBearer();

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

app.UseResponseCaching();
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
