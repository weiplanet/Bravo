/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/

import { AppError } from '../model/exceptions';
import { i18n } from '../model/i18n'; 
import { strings } from '../model/strings';
import { Dialog } from './dialog';


export class ErrorAlert extends Dialog {

    constructor() {
        super("error", document.body, i18n(strings.error), [
            { name: i18n(strings.dialogOK), action: "cancel", className: "button-alt" },
        ], "icon-alert");
    }

    show(error?: AppError) {
        let html = `
            ${error.toString().replace(/\n/gm, "<br>")}
        `;
        this.body.insertAdjacentHTML("beforeend", html);

        return super.show();
    }

}