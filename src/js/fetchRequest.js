import News from "./modules/NewsItem";
import Request from "./modules/Request";
import errorModal from './modules/ErrorModal';

export default (url) => {
    const getData = async (url) => {
        const fetchRequest = new Request("GET", url);
        const response = await fetchRequest.perform();
        const data = await response.json();
        return data;
    };

    getData(url)
        .then(data => data.articles.map(news => new News(news).createNewsArticle()))
        .catch(error => { errorModal.show(error)})
};