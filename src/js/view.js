import { elements } from './base';

export const clearResults = () => {
    elements.kitList.innerHTML = '';
};

export const testKit = [1, 2, 3];

export const renderKit = result => {

    const markup = `
        <div class="column is-one-third">
            <div class="card box">
                    <h2 class="title">
                        
                        </h2>
                        <video class="vidCard" controls>
                            <source
                                src="https://lh3.googleusercontent.com/6hq3UysFaL64F1G92mKxeQEezcRob6aRafRYa42BDYnTwXQoydZgxct7qu6eYaiNp12UfkuhgkdQMlhV26VF52p5T0FUqEv_ihzHZqkASkToqvtqpGXYi93yOKtPUfKC6DSGiM0mSgw=w600-h315-k-no-m18"
                                type="video/mp4">
                        </video>
                        <div class="level">
                            <div class="level-left">
                                <a class="button is-primary">Download Kit</a>
                            </div>
                            <div class="level-right">
                                <a class="button is-disabled">Upload Remix</a>
                            </div>
                        </div>
            </div>
        </div>
    `;

    elements.kitList.insertAdjacentHTML('beforeend', markup);
};

export const renderKits = (results) => {
    // results.forEach(renderKit); 
    // console.log(results);   
};