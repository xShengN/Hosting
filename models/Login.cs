using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Hotel.models
{
    public class Login
    {
        [JsonProperty("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id {get;set;}
    }
}