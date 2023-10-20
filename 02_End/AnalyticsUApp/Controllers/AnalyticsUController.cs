using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnalyticsUApp.Helpers;
using AnalyticsUApp.Models;

namespace AnalyticsUApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AnalyticsUController : ControllerBase
    {
        private readonly DataContext _dataContext;
        
        public AnalyticsUController(DataContext _context)
        {
            _dataContext = _context;    
        }

        [HttpGet]
        [Route("GetData")]
        public  IEnumerable<MonthlyAnalytics> GetData()
        {
            var analyticsData = _dataContext.monthlyAnalytics.Select(_data => new MonthlyAnalytics
            {
                Id = _data.Id,
                MonthText = _data.MonthText,
                MonthSum = _data.MonthSum,
                MonthYear = _data.MonthYear,
            }).ToList();

            return analyticsData;
        }
    }
}
