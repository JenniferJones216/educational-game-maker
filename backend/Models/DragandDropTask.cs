using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class DragandDropTask
    {
        public int Id { get; set; }
        public int Task1Id { get; set; }
        public int DragandDropId { get; set; }

        public virtual Task1 Task1 { get; set; }
        public virtual DragandDrop DragandDrop { get; set; }


    }
}