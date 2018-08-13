using Microsoft.AspNetCore.Mvc;

namespace SimpleChatApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
