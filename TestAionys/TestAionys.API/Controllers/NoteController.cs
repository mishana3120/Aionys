using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAionys.Abstraction.Interfaces;
using TestAionys.Context.Entity;

namespace TestAionys.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly INotes<Note> _services;

        public NoteController(INotes<Note> services)
        {
            this._services = services;
        }

        [HttpGet]
        public IActionResult GetAllNotes()
        {
            return Ok(_services.GetAllNotes());
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                _services.DeleteNote(id);
                return Ok();
            }
            catch
            {
                return StatusCode(500, new { errorMessage = "Не удалось удалить заметку" });
            }
        }

        [HttpPut]
        public IActionResult Edit([FromBody]Note note)
        {
            try
            {
                _services.EditNote(note);
                return Ok();
            }
            catch
            {
                return StatusCode(500, new { errorMessage = "Не удалось редактировать заметку" });
            }
        }

        [HttpPost]
        public IActionResult Add(Note note)
        {
            try
            {
                note.id = Guid.NewGuid().ToString();
                _services.AddNote(note);
                return Ok();
            }
            catch
            {
                return StatusCode(500, new { errorMessage = "Не удалось добавить заметку" });
            }
        }
    }
}
