using CRUDInAjaxAndJQuery.Data;
using CRUDInAjaxAndJQuery.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CRUDInAjaxAndJQuery.Controllers.Ajax
{
    public class AjaxController : Controller
    {
        private readonly ApplicationContext context;
        public AjaxController(ApplicationContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            //var result = context.AjaxEmployee.ToList();
            return View();
        }
        [HttpGet]
        public JsonResult EmployeeList()
        {
            var data = context.AjaxEmployee.ToList();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult AddEmployee(Employee employee)
        {
            var emp = new Employee()
            {
                Name = employee.Name,
                State = employee.State,
                City = employee.City,
                Salary = employee.Salary
            };
            context.AjaxEmployee.Add(emp); 
            context.SaveChanges(); 
            return new JsonResult("Data is Saved Successfully");
        }
    }
}
