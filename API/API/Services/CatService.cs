﻿using API.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace API.Services
{
    public class CatService
    {
        private readonly HttpClient _httpClient;

        public CatService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;

            _httpClient.BaseAddress = new Uri(configuration["CatUrl"]);

            _httpClient.DefaultRequestHeaders.Add(
                HeaderNames.Accept, "application/json");
        }

        public async Task<Cat> GetCat()
        {
            var response = await _httpClient.GetAsync("cat?json=true");
            response.EnsureSuccessStatusCode();

            using var responseStream = response.Content.ReadAsStreamAsync();
            var serializer = new JsonSerializer();
            using var streamReader = new System.IO.StreamReader(responseStream.Result);
            using var jsonReader = new JsonTextReader(streamReader);
            var cat = serializer.Deserialize<Cat>(jsonReader);
            return cat;
        }
    }
}
