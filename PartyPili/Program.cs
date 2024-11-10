using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();  // This serves static files (like index.html)

app.MapGet("/", () => Results.Redirect("/index.html"));  // Redirect root to index.html

app.Run();
