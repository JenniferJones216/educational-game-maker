using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Wordsearch : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
