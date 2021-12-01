using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class Wordserch
    {
     public int Id { get; set; }

        public int UserId { get; set; }
        public int Hight { get; set; }
        public int Width { get; set; }
        public char[] Matrix { get; set; }
        public string[] Keywords { get; set; }
        
    }
}
