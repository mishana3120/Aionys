using System;
using System.Collections.Generic;
using System.Text;

namespace TestAionys.Abstraction.Interfaces
{
    public interface INotes<T>
    {
        List<T> GetAllNotes();
        void AddNote(T entity);

        void DeleteNote(string id);

        void EditNote(T entity);
    }
}
