export class CarService {
  static async createUpload (input){
    try {
        console.log('test')
    } catch(e) {
      console.error("StorageService.uplaodFileObject", e);
      return null;
    }
  }
}
