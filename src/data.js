const pagesKey = 'pages';

let pageJson  = localStorage.getItem(pagesKey);
let pageStore        = JSON.parse(pageJson)


function save(){
    localStorage.setItem(pagesKey,JSON.stringify(pageStore));

}


export default {


    addPage(page){

        pageStore.push(page);

       save()


    },

    getAllPages() {
        return pageStore;
    },
    getSinglePage(index) {
        return pageStore[index];
    },
    editPage(index,page){
        pageStore[index]=page;

        save()

    },
    removePage(index) {
        pageStore.splice(index,1);
        save()

    }



}