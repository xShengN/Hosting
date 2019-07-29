using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace Hotel.models
{
    public class Users
    {
        [JsonProperty("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id {get;set;}
        [JsonProperty("password")]
        public string Password {get;set;}
        [JsonProperty("firstName")]
        public string FirstName {get;set;}
        [JsonProperty("lastname")]
        public string LastName {get;set;}

    }
}