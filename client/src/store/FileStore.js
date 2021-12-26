import BaseStore from './BaseStore';
import { API_URL } from '../config';
import axios from 'axios';

export class FileStore extends BaseStore {
  constructor() {
    super();
    this.observable({
      fileName: '',
      fileDoc: '',
      fileData: null,
      AllFileData: [],
    });
  }

  setFileName(name) {
    this.fileName = name;
  }
  setFileDoc(doc) {
    this.fileDoc = doc;
  }
  setFileData(data) {
    this.fileData = data;
  }

  async getFile() {
    try {
      const { data } = await axios.get(`${API_URL}/admin/getAllFile`);
      console.log('all', data);
      this.AllFileData = data;
    } catch (error) {
      throw error;
    }
  }

  async downloadFile(path) {
    try {
      window.open(`${API_URL}/admin/getFile/${path}`);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(id) {
    try {
      await axios.delete(`${API_URL}/admin/delete/${id}`);
    } catch (error) {
      throw error;
    }
  }
}

export default new FileStore();
