using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Position
    {
        public Guid Id { get; set; }
        public String Longitude { get; set; }
        public String Latitude { get; set; }
        public Guid UserId { get; set; }
    }
}
