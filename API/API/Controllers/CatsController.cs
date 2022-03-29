using API.Models;
using API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatsController : ControllerBase
    {
        private CatService _dataService;
        public CatsController(IConfiguration config, CatService dataService)
        {
            _dataService = dataService;
        }
        [HttpGet]
        public async Task<Cat> Get()
        {
            return await _dataService.GetCat();
        }

        [HttpGet("{n}")]
        public async Task<IEnumerable<Cat>> GetN(int n)
        {
            return await _dataService.GetNCats(n);
        }
    }
}
