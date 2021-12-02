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

        public virtual List<Wordsearch> Wordsearchs { get; set; }

        public virtual List<Crossword> Crosswords { get; set; }

    }
}
