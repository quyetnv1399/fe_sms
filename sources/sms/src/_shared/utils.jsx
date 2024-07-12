export class Utils {
    static getKeyData(data) {
        let newData = [];
        data.forEach((x, index) => newData.push({
            key: x.id || index,
            ...x
        }))
        
        return newData;
    }
}