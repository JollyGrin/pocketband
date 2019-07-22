import { elements } from './base';

export const clearResults = () => {
    elements.kitList.innerHTML = '';
};

const disableCheck = (query) => {
    if (query) {
        return 'disabled';
    }
}

const linkCheck = (query) => {
    if (query.fields.disabled) {
        return '#';
    } else {
        return query.fields.PatternExport;
    }
}

const dlLink = (query) => {
    if (query.fields.disabled) {
        return 'Download Broken';
    } else {
        return 'Download Backup';
    }
}

export const renderKit = result => {

    const markup = `
        <div class="column is-one-third">
            <div class="card box">
                    <h3 class="title">
                        ${result.fields.KitName}
                    </h3>
                        <video class="vidCard" controls>
                            <source
                                src="${result.fields.SampleVideo}" type="video/mp4">
                        </video>
                        <div class="level">
                            <div class="level-left">
                                <a href="${linkCheck(result)}" class="button is-primary" ${disableCheck(result.fields.disabled)}>${dlLink(result)}</a>
                            </div>
                            <div class="level-right">
                            <h6 class="help">
                                by: ${result.fields.author}
                            </h6>
                            </div>
                            
                        </div>
            </div>
        </div>
    `;

    elements.kitList.insertAdjacentHTML('beforeend', markup);
};

export const renderKits = (results) => {
    results.forEach(renderKit); 
    // console.log(results);   
};