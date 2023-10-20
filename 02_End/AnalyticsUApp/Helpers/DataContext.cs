using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AnalyticsUApp.Models;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore.Migrations.Operations;


namespace AnalyticsUApp.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration configuration;

        public DataContext(IConfiguration _configuration)
        {
            configuration = _configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(configuration.GetConnectionString("AnalyticsContext"));
        }

        public DbSet<MonthlyAnalytics> monthlyAnalytics { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<MonthlyAnalytics>().ToTable("MonthlyAnalytics");
        }
    }
}
