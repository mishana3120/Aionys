import axios from "axios";

const baseUrl = "http://localhost:55193/api/";

export default {
  ReqNotes(url = baseUrl + "note/") {
    return {
      feetchNotes: () => axios.get(url),
      update: (note) => axios.put(url, note),
      delete: (id) => axios.delete(url + id),
      create: (note) => axios.post(url, note),
    };
  },
};
