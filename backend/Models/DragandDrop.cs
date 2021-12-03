using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class DragandDrop
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Subheading { get; set; }
        public int UserId { get; set; }
        public string PromptText { get; set; }
        public string WordBank { get; set; }
        public virtual User User { get; set; }

    }
}
