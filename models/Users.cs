using Newtonsoft.Json;
namespace Hotel.models
{
    public class Users
    {
        [JsonProperty("id")]
        public int Id {get;set;}
        [JsonProperty("password")]
        public string Password {get;set;}
        [JsonProperty("firstName")]
        public string FirstName {get;set;}
        [JsonProperty("lastname")]
        public string LastName {get;set;}

    }
}