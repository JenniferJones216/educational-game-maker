using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EducationalGameMaker;
using EducationalGameMaker.Models;

namespace EducationalGameMaker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DragandDropsController : ControllerBase
    {
        private readonly GameContext _context;

        public DragandDropsController(GameContext context)
        {
            _context = context;
        }

        // GET: api/DragandDrops
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DragandDrop>>> GetDragandDrops()
        {
            return await _context.DragandDrops.ToListAsync();
        }

        // GET: api/DragandDrops/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DragandDrop>> GetDragandDrop(int id)
        {
            var dragandDrop = await _context.DragandDrops.FindAsync(id);

            if (dragandDrop == null)
            {
                return NotFound();
            }

            return dragandDrop;
        }

        // PUT: api/DragandDrops/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDragandDrop(int id, DragandDrop dragandDrop)
        {
            if (id != dragandDrop.Id)
            {
                return BadRequest();
            }

            _context.Entry(dragandDrop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DragandDropExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DragandDrops
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DragandDrop>> PostDragandDrop(DragandDrop dragandDrop)
        {
            _context.DragandDrops.Add(dragandDrop);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDragandDrop", new { id = dragandDrop.Id }, dragandDrop);
        }

        // DELETE: api/DragandDrops/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<DragandDrop>>> DeleteDragandDrop(int id)
        {
            var dragandDrop = await _context.DragandDrops.FindAsync(id);
            if (dragandDrop == null)
            {
                return NotFound();
            }

            _context.DragandDrops.Remove(dragandDrop);
            await _context.SaveChangesAsync();

            return await _context.DragandDrops.ToListAsync();

        }

        private bool DragandDropExists(int id)
        {
            return _context.DragandDrops.Any(e => e.Id == id);
        }
    }
}
