class StorageApi {
    constructor(itemKey, persist = false){
        this.itemKey = itemKey;
        this.persist = persist;
    }

    async checkStorageForKey(){
        try {
            switch (this.persist){
                case true:
                    let local = JSON.parse(localStorage.getItem(this.itemKey))
                    if (local !== null && local !== undefined){
                        return true;
                    } else {
                        return false;
                    };
            
                case false:
                    let session = JSON.parse(sessionStorage.getItem(this.itemKey))
                    if (session !== null && session !== undefined){
                        return true;
                    } else {
                        return false;
                    };
            };
        } catch (error){
            console.error('Failed to check if key is in storage'+error)
        }
    }

    async getStorage(){
        let history;
        switch(this.persist){
            case true:
                history = JSON.parse(localStorage.getItem(this.itemKey));
                return history;
            case false:
                history = JSON.parse(sessionStorage.getItem(this.itemKey));
                return history;
            default:
                console.error('getStorage was unable to determine storage location');
                return
        };
    };

    async postToStorage(item, overwrite=false){
        let history;
        let newHistory = [];

        switch (this.persist){
            case true:
                try {
                    history = JSON.parse(localStorage.getItem(this.itemKey))
                    if (overwrite === false && (history != null || history != undefined)){
                        history.forEach(historyElement => {
                            newHistory.push(historyElement)
                        });
                    };
                } catch (error) {
                    console.error('Failed to post to sessionStorage:'+ error)
                } finally {
                    newHistory.push(item)
                    localStorage.setItem(this.itemKey, JSON.stringify(newHistory))
                }
                break;
            case false:
                try {
                    history = JSON.parse(sessionStorage.getItem(this.itemKey))
                    if (overwrite === false && (history != null || history != undefined)){
                        history.forEach(historyElement => {
                            newHistory.push(historyElement)
                        });
                    };
                } catch (error) {
                    console.error('Failed to post to sessionStorage:'+ error)
                } finally {
                    newHistory.push(item)
                    sessionStorage.setItem(this.itemKey, JSON.stringify(newHistory))
                }
                break;
            default:
                console.error("postToStorage was unable to determine persistance");
                return;
        }
    }
}

export default StorageApi;