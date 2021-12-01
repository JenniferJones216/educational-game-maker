using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual List<Wordserch> Wordserchs { get; set; }

        public virtual List<Crossword> Crosswords { get; set; }

    }
}
