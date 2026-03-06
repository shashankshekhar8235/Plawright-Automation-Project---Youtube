import {text, expect} from '@playwright/test';

export default class HomePage{

    serviceTitlelocator = "Service";

    constructor(page){
        
    }

    async expectServiceTitle(){
        await expect(this.page.getByTitle(this.serviceTitlelocator)).toBeVisible({timeout:15000});
    }

}