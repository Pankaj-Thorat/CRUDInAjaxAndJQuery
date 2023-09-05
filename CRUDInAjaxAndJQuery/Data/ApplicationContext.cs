using CRUDInAjaxAndJQuery.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;
using DbContext = Microsoft.EntityFrameworkCore.DbContext;

namespace CRUDInAjaxAndJQuery.Data
{
    public class ApplicationContext : DbContext 
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        { }

        public Microsoft.EntityFrameworkCore.DbSet<Employee> AjaxEmployee { get; set; }
    }
}
