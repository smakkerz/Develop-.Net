using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Web.Mvc;
using Common.Lib.RestAPI;
using Develop.Model;

namespace Develop.Web.Controllers
{
    public partial class HomeController : Controller
    {
        public virtual ActionResult Index()
        {
            var ListUser = RESTHelper.Get<ResultModel<List<UsersModel>>>(ConfigurationManager.AppSettings["HostAPIURL"] + ConfigurationManager.AppSettings["GetAllUser"]);
            return View(ListUser);
        }

        public virtual ActionResult SubmitCatalogue()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public virtual ActionResult SubmitUser()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}