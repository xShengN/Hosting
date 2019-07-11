using Newtonsoft.Json;

namespace Hotel.models
{
    public class Login
    {
        [JsonProperty("id")]
        public int Id {get;set;}
    }
}