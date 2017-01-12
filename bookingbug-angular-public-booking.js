(function() {
  'use strict';
  angular.module('BB.Services').config(function($translateProvider) {
    'ngInject';
    var translations;
    translations = {
      PUBLIC_BOOKING: {
        ACCORDION_RANGE_GROUP: {
          AVAILABLE: "{number, plural, =0{Keine verfügbar} one{1 verfügbar} other{# verfügbare}}"
        },
        ITEM_DETAILS: {
          MOVE_BOOKING_SUCCESS_ALERT: "Your booking has been moved to {{datetime}}",
          MOVE_BOOKING_FAIL_ALERT: "Failed to move booking. Please try again."
        },
        ADD_RECIPIENT: {
          MODAL_HEADING: "@:COMMON.TERMINOLOGY.RECIPIENT",
          WHO_TO_QUESTION: "Who should we send the gift voucher to?",
          WHO_TO_OPTION_ME: "Me",
          WHO_TO_OPTION_NOT_ME: "Someone else",
          NAME_LBL: "Name",
          NAME_VALIDATION_MSG: "Bitte geben Sie den vollständigen Namen des Empfängers ein",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          ADD_LBL: "Add Recipient",
          CANCEL_LBL: "@:COMMON.BTN.CANCEL"
        },
        BASKET_DETAILS: {
          STEP_HEADING: "Warenkorb Details",
          BASKET_DETAILS_NO: "Keine Artikel in den Warenkorb hinzugefügt.",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          BASKET_ITEM_APPOINTMENT: "@:COMMON.TERMINOLOGY.APPOINTMENT",
          TIME_AND_DURATION: "{{ time | datetime: 'LLLL':false}} für {{ duration | time_period }}",
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BASKET_STATUS: "{N, plural, =0 {empty}, one {One item in your basket}, other {#items in your basket}}"
        },
        BASKET_ITEM_SUMMARY: {
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          RESOURCE_LBL: "@:COMMON.TERMINOLOGY.RESOURCE",
          PERSON_LBL: "@:COMMON.TERMINOLOGY.PERSON",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME"
        },
        CALENDAR: {
          NEXT_BTN: "@:COMMON.BTN.NEXT",
          MOVE_BOOKING_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CATEGORY: {
          APPOINTMENT_TYPE: "Select appointment type",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CANCEL_MODAL: {
          CANCEL_QUESTION: "Sind Sie sicher, Sie wollen diesen Buchung stornieren?",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          DONT_CANCEL_BOOKING_BTN: "@:COMMON.BTN.DO_NOT_CANCEL_BOOKING"
        },
        CHECK_ITEMS: {
          REVIEW: "Rezension",
          DETAILS_HEADING: "Your details",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_REQUIRED",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          ITEM_DETAILS: {
            BOOKING_QUESTIONS_HEADING: "Other information",
            FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
            REQUIRED_FIELDS: "@:COMMON.FORM.REQUIRED"
          },
          PROGRESS_CONFIRM: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CHECKOUT: {
          PAYMENT_WORD: "Zahlung",
          PAYMENT_DETAILS_HEADING: "Einzelheiten zur Bezahlung",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CHECKOUT_EVENT: {
          EVENT_PAYMENT: "Bitte füllen Sie die Zahlung an Ihre Buchung zu bestätigen",
          EVENT_TICKETS: "@:COMMON.TERMINOLOGY.TICKETS",
          ITEM_TYPE: "Art",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          ITEM_QTY: "Menge",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          COUNT_AS: "for {{count_as}}",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CLIENT: {
          DETAILS_HEADING: "Your details",
          CLIENT_DETAILS_HEADING: "Kundendaten",
          REQUIRED_FIELDS: "@:COMMON.FORM.REQUIRED",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          BOOKING_QUESTIONS_HEADING: "Sonstige Angaben",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          PROGRESS_CONTINUE: "@:COMMON.BTN.NEXT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          PROGRESS_CLEAR: "@:COMMON.BTN.CLEAR"
        },
        COMPANY_CARDS: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        COMPANY_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CONFIRMATION: {
          TITLE: "Buchungsbestätigung",
          BOOKING_CONFIRMATION: "Danke {{member_name}}. Ihre Buchung ist jetzt bestätigt. Wir haben Ihnen die Angaben per E-Mail geschickt.",
          ITEM_CONFIRMATION: "Bestätigung",
          WAITLIST_CONFIRMATION: "Thanks {{member_name}}. Your have successfully made the following bookings. We have you emailed you the details below.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        MEMBER_LOGIN_FORM: {
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          PASSWORD_LBL: "@:COMMON.FORM.PASSWORD",
          PASSWORD_REQURIED: "Please enter your password",
          REMEMBER_ME: "Remember me",
          LOGIN: "@:COMMON.BTN.LOGIN"
        },
        MONTH_PICKER: {
          BACK_BTN: "@:COMMON.BTN.CANCEL",
          NEXT_BTN: "Nächster"
        },
        POPOUT_EXPORT_BOOKING: {
          LONG_EXPORT_LBL: "Export to calendar",
          SHORT_EXPORT_LBL: "@:COMMON.TERMINOLOGY.EXPORT"
        },
        PRICE_FILTER: {
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        SERVICE_LIST_FILTER: {
          FILTER: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_FILTER_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY: "@:COMMON.TERMINOLOGY.ANY",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          ITEM_SERVICE_PLACEHOLDER: "@:COMMON.TERMINOLOGY.SERVICE",
          FILTER_RESET: "@:COMMON.TERMINOLOGY.RESET"
        },
        WEEK_CALENDAR: {
          ALL_TIMES_IN: "All times are shown in {{time_zone_name}}.",
          NO_AVAILABILITY: "It looks like there's no availability for the next {time_range_length, plural, one{day} other{# days}}",
          NEXT_AVAIL: "Jump to Next Available Day",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          ANY_DATE: "- Any Date -",
          MORNING_HEADER: "@:COMMON.TERMINOLOGY.MORNING",
          AFTERNOON_HEADER: "@:COMMON.TERMINOLOGY.AFTERNOON",
          EVENING_HEADER: "@:COMMON.TERMINOLOGY.EVENING"
        },
        BASKET: {
          BASKET_HEADING: "Ihr Warenkorb",
          BASKET_ITEM_NO: "Es sind keine Artikel im Warenkorb",
          BASKET_ITEM_ADD_INSTRUCT: "Please press the add another item button if you wish to add a product or service",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BASKET_RECIPIENT: "@:COMMON.TERMINOLOGY.RECIPIENT",
          BASKET_CERTIFICATE_PAID: "Certicicate Bezahlt",
          BASKET_GIFT_CERTIFICATES: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BASKET_PRICE_ORIGINAL: "Neupreis",
          BASKET_BOOKING_FEE: "@:COMMON.TERMINOLOGY.BOOKING_FEE",
          BASKET_GIFT_CERTIFICATES_TOTAL: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BASKET_GIFT_CERTIFICATE_BALANCE: "Restwert auf Geschenkgutscheine",
          BASKET_COUPON_DISCOUNT: "Coupon Rabatt",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          BASKET_WALLET_BALANCE: "Aktuelle Wallet Balance",
          BASKET_WALLET_BALANCE_INSUFFICIENT: "Ach nein! Sie haben derzeit nicht genügend Geld in der Brieftasche Konto. Sie können entweder den vollen Betrag, oder nach oben, um mehr Geld, um Ihre Brieftasche hinzufügen.",
          BASKET_WALLET_REMAINDER_PART_ONE: "Du wirst haben",
          BASKET_WALLET_REMAINDER_PART_TWO: "in Ihrer Brieftasche nach diesem Kauf links",
          BASKET_WALLET_TOP_UP: "@:COMMON.BTN.TOP_UP",
          BASKET_COUPON_APPLY: "Anwendung der Rabatt",
          APPLY_BTN: "@:COMMON.BTN.APPLY",
          VOUCHER_BOX: {
            BASKET_GIFT_CERTIFICATE_QUESTION: "Haben Sie einen Gutschein?",
            BASKET_GIFT_CERTIFICATE_APPLY: "Tragen Sie einen Geschenkgutschein",
            BASKET_GIFT_CERTIFICATE_APPLY_ANOTHER: "Gelten Andere Geschenkgutschein",
            VOUCHER_CODE_PLACEHOLDER: "Enter a voucher code",
            APPLY_BTN: "@:COMMON.BTN.APPLY"
          },
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          BASKET_ITEM_ADD: "Fügen Sie ein anderes Element",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_SUMMARY: {
          STEP_HEADING: "Summary",
          STEP_DESCRIPTION: "Please review the following information",
          ITEM_DATE_AND_OR_TIME: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          NAME_LBL: "@:COMMON.TERMINOLOGY.NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          ADDRESS_LBL: "@:COMMON.FORM.ADDRESS",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CONFIRM_BTN: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_WAITLIST: {
          WAITLIST_BOOKING_HEADING: "Ihre Warteliste Buchung",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          ITEM_DATE_AND_OR_TIME: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          CONFIRMATION_SUMMARY: {
            BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
            BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW"
          },
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          CONFIRMATION_WAITLIST_SUBHEADER: "Danke {{ member_name }}. Sie haben successully auf gebucht {{ purchase_item }}.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        ERROR_MODAL: {
          OK_BTN: "@:COMMON.BTN.OK"
        },
        MEMBER_FORM: {
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PHONE_LBL: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          SAVE_BTN: "@:COMMON.BTN.SAVE"
        },
        BASKET_WALLET: {
          BASKET_WALLET_MAKE_PAYMENT: "Zahlung",
          BASKET_WALLET_SHOW_TOP_UP_BOX: "@:COMMON.BTN.TOP_UP",
          BASKET_WALLET_TOP_UP: "@:COMMON.BTN.TOP_UP",
          BASKET_WALLET_AMOUNT: "Menge",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          BASKET_WALLET_AMOUNT_MINIMUM: "Mindest nachfüllen Betrag muss größer sein als",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DASH: {
          DASHBOARD: "Armaturenbrett",
          DASHBOARD_HEADING: "Wählen Sie einen Ort / @:COMMON.TERMINOLOGY.SERVICE"
        },
        DAY: {
          PREV_MONTH_BTN: "Vorheriger Monat",
          NEXT_MONTH_BTN: "Nächster Monat",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DATE_NOT_SELECTED: "You need to select a date"
        },
        DEAL_LIST: {
          BASKET_GIFT_CERTIFICATE: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BUY_GIFT_CERT_BTN: "Kaufen Geschenkgutscheine",
          BASKET_GIFT_CERTIFICATE_SELECTED: "Ausgewählte Geschenkgutscheine",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          FORM: {
            RECIPIENT_ADD: "Fügen Sie einen Empfänger",
            RECIPIENT_NAME: "Recipient Name",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            PROGRESS_ADD: "Hinzufügen",
            RECIPIENT_NAME_REQUIRED: "Bitte geben Sie den vollständigen Namen des Empfängers ein",
            RECIPIENT_EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED"
          },
          RECIPIENT: "@:COMMON.TERMINOLOGY.RECIPIENT",
          RECIPIENT_NAME: "Name",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PROGRESS_BUY: "Kaufen",
          BACK_BTN: "@:COMMON.BTN.BACK",
          CERT_NOT_SELECTED_ALERT: "You need to select at least one Gift Certificate to continue"
        },
        DURATION_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DURATON_NOT_SELECTED_ALERT: "You need to select a duration"
        },
        EVENT: {
          EVENT_DETAILS_HEADING: "Event-Details",
          ITEM_TYPE: "Type",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          ITEM_QTY: "Qty",
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          EVENT_SOLD_OUT: "Sold Out",
          ADD_ONS: "Add-ons",
          SUBTOTAL: "Subtotal",
          BASKET_GIFT_CERTIFICATE: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATE",
          BASKET_DISCOUNT: "Discount",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_DUE_TOTAL: "Due Total",
          BASKET_GIFT_CERTIFICATE_QUESTION: "Have a gift certificate?",
          BASKET_GIFT_CERTIFICATE_APPLY: "Apply a gift Certificate",
          GIFT_CERTIFICATE_CODE_PLACEHOLDER: "Enter your certificate code",
          APPLY_BTN: "@:COMMON.BTN.APPLY",
          BASKET_GIFT_CERTIFICATES_APPLIED: "Gift Certificates applied",
          BASKET_REMOVE_DEAL: "Remove",
          BASKET_GIFT_CERTIFICATE_BALANCE: "Remaining Gift Certificate balance",
          DETAILS_HEADING: "Angaben zu Ihrer Person",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          STORE_PHONE: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_REQ_VALIDATION_MSG: "@:COMMON.TERMINOLOGY.MOBILE_REQUIRED",
          ADDRESS_LBL: "@:COMMON.TERMINOLOGY.ADDRESS1",
          ADDRESS_REQ_VALIDATION_MSG: "@:COMMON.TERMINOLOGY.MOBILE_REQUIRED",
          ADDRESS_3_LBL: "@:COMMON.TERMINOLOGY.ADDRESS3",
          ADDRESS_4_LBL: "@:COMMON.TERMINOLOGY.ADDRESS4",
          POSTCODE_LBL: "@:COMMON.TERMINOLOGY.POSTCODE",
          POSTCODE_INVALID: "@:COMMON.FORM.POSTCODE_INVALID",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          UIB_ACCORDION: {
            TICKET_WORD: "Ticket",
            DETAILS_WORD: "details",
            ATTENDEE_IS_YOU_QUESTION: "Sind Sie der Teilnehmer?",
            ATTENDEE_USE_MY_DETAILS: " Ja, verwenden Sie meine Daten",
            FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
            LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
            FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED"
          },
          T_AND_C_LBL: "@:COMMON.FORM.TERMS_AND_CONDITIONS",
          T_AND_C_REQUIRED: "@:COMMON.FORM.TERMS_AND_CONDITIONS_REQUIRED",
          TICKET_WORD: "Ticket",
          DETAILS_WORD: "details",
          RESERVE_TICKET: "Reserve Ticket",
          LETTER_S: "s",
          EVENT_JOIN_WAITLIST: "Join Waitlist",
          BOOK_TICKET: "@:COMMON.BTN.BOOK Ticket",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        EVENT_GROUP_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        EVENT_LIST: {
          TITLE: "Events an",
          FILTER: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_FILTER_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY_CATEGORY: "@:COMMON.TERMINOLOGY.ANY @:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY: "@:COMMON.TERMINOLOGY.ANY",
          FILTER_ANY_PRICE: '@:COMMON.TERMINOLOGY.ANY @:COMMON.TERMINOLOGY.PRICE',
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          HIDE_FULLY_BOOKED_EVENTS: "Ausblenden Ausverkauft Events",
          SHOW_FULLY_BOOKED_EVENTS: "Ausverkauft Events anzeigen",
          FILTER_RESET: "@:COMMON.TERMINOLOGY.RESET",
          FILTER_NONE: "Zeige alle Veranstaltungen",
          FILTER_FILTERED: "Zeige gefilterte Ereignisse",
          EVENT_WORD: "@:COMMON.TERMINOLOGY.EVENTS",
          EVENT_NO: "Keine Termine gefunden",
          EVENT_SPACE_WORD: "raum",
          EVENT_LEFT_WORD: "übrig",
          PRICE_FROM: "Von",
          BOOK_EVENT_BTN: "@:COMMON.BTN.BOOK_EVENT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          EVENT_SOLD_OUT: "Ausverkauft",
          EVENT_JOIN_WAITLIST: "Beitreten Warteliste"
        },
        MAIN: {
          POWERED_BY: "Buchungen bereitgestellt von"
        },
        MAP: {
          SEARCH_BTN: "Suche",
          SEARCH_BTN: "Suche",
          INPUT_PLACEHOLDER: "Ort, Postleitzahl oder ladens eingeben",
          GEOLOCATE_HEADING: "Aktuellen Standort benutzen",
          STORE_RESULT_HEADING: "{results, plural, =0{Keine Ergebnisse} one{1 Ergebnis} other{# Ergebnisse}} für Ausstellungsräume in der Nähe von {address}",
          HIDE_STORES: "Hide stores with no availability",
          SERVICE_UNAVAILABLE: "Sorry, but {{name}} is not available at this location",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          UIB_ACCORDION: {
            SELECT_BTN: "@:COMMON.BTN.SELECT",
            SERVICE_UNAVAILABLE: "Sorry, but {{name}} is not available at this location"
          }
        },
        MEMBERSHIP_LEVELS: {
          STEP_HEADING: "Mitgliedschaftstypen",
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        TIME: {
          PREV_DAY_BTN: "Vorheriger Tag",
          NEXT_DAY_BTN: "Nächster Tag",
          NO_AVAILABILITY: "Kein @:COMMON.TERMINOLOGY.SERVICE vorhanden",
          BACK_BTN: "@:COMMON.BTN.BACK",
          TIME_NOT_SELECTED_ALERT: "Please select a time slot",
          AVAIL_MORNING: "Morgens",
          AVAIL_AFTERNOON: "Nachmittags",
          AVAIL_EVENING: "Abends"
        },
        SURVEY: {
          SURVEY_THANK_YOU: "Vielen Dank für das Ausfüllen der Umfrage!",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SESSION",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          SURVEY_QUESTIONS_HEADING: "Umfrage",
          DETAILS_QUESTIONS: "@:COMMON.TERMINOLOGY.QUESTIONS",
          SUBMIT_SURVEY_BTN: "@:COMMON.BTN.SUBMIT",
          NO_QUESTIONS: "Keine Umfrage Fragen für diese Sitzung."
        },
        SERVICE_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          SERVICE_LIST_NO: "Keine Dienste Ihren Filterkriterien.",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESOURCE_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESCHEDULE_REASONS: {
          MOVE_HEADING: "Move Appointment",
          MOVE_REASON: "Please select a reason for moving your appointment:",
          MOVE_BTN: "Move Appointment"
        },
        PURCHASE: {
          CANCEL_CONFIRMATION_HEADING: "Ihre Buchung storniert wurde.",
          HEADING: "Ihre {{ service_name }} reservierung",
          RECIPIENT_NAME: "Name",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          MOVE_BOOKING_BTN: "Verschieben Buchung",
          BOOK_WAITLIST_ITEMS_BTN: "Buchen Warteliste Artikel"
        },
        PRINT_PURCHASE: {
          TITLE: "Buchungsbestätigung",
          BOOKING_CONFIRMATION: "Danke {{member_name}}. Ihre Buchung ist jetzt bestätigt. Wir haben Ihnen die Angaben per E-Mail geschickt.",
          EXPORT_BOOKING_BTN: "@:COMMON.TERMINOLOGY.EXPORT",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          AND: "@:COMMON.TERMINOLOGY.AND",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          QTY_LBL: "Menge",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          POWERED_BY: "Buchungen bereitgestellt von"
        },
        PERSON_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DAY: {
          STEP_HEADING: "Select a day",
          WEEK_BEGINNING_LBL: "Week beginning",
          SELECT_DATE_BTN_HEADING: "Wählen Sie ein Datum",
          PREVIOUS_5_WEEKS_BTN: "Previous 5 Weeks",
          NEXT_5_WEEKS_BTN: "Next 5 Weeks",
          KEY: "Key",
          AVAILABLE: "{number, plural, =0{Keine verfügbar} one{1 verfügbar} other{# verfügbare}}",
          UNAVAILABLE: "@:COMMON.TERMINOLOGY.UNAVAILABLE",
          BACK_BTN: "@:COMMON.BTN.BACK"
        }
      }
    };
    $translateProvider.translations('de', translations);
  });

}).call(this);

(function() {
  "use strict";
  angular.module("BB.Services").config(function($translateProvider) {
    "ngInject";
    var translations;
    translations = {
      PUBLIC_BOOKING: {
        ACCORDION_RANGE_GROUP: {
          NUM_SLOTS_AVAILABLE: "{SLOTS_NUMBER, plural, =0{no time} =1{1 time} other{{SLOTS_NUMBER} times}} available"
        },
        ITEM_DETAILS: {
          MOVE_BOOKING_SUCCESS_ALERT: "Your booking has been moved to {{datetime | datetime: 'LLLL'}}",
          MOVE_BOOKING_FAIL_ALERT: "Failed to move booking. Please try again.",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED"
        },
        ADD_RECIPIENT: {
          MODAL_HEADING: "@:COMMON.TERMINOLOGY.RECIPIENT",
          WHO_TO_QUESTION: "Who should we send the gift voucher to?",
          WHO_TO_OPTION_ME: "Me",
          WHO_TO_OPTION_NOT_ME: "Someone else",
          NAME_LBL: "Name",
          NAME_VALIDATION_MSG: "Please enter the recipient's full name",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          ADD_LBL: "Add Recipient",
          CANCEL_LBL: "@:COMMON.BTN.CANCEL"
        },
        BASKET_DETAILS: {
          MODAL_HEADING: "Basket Details",
          NO_ITEMS_IN_BASKET: "No items added to basket yet.",
          ITEM_COL_HEADING: "@:COMMON.TERMINOLOGY.ITEM",
          TIME_DURATION_COL_HEADING: "@:COMMON.TERMINOLOGY.APPOINTMENT",
          ITEM_TIME_AND_DURATION: "{{time | datetime: 'LLLL'}} for {{duration | time_period}}",
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT"
        },
        BASKET_ITEM_SUMMARY: {
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          RESOURCE_LBL: "@:COMMON.TERMINOLOGY.RESOURCE",
          PERSON_LBL: "@:COMMON.TERMINOLOGY.PERSON",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME"
        },
        CALENDAR: {
          NEXT_BTN: "@:COMMON.BTN.NEXT",
          MOVE_BOOKING_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CATEGORY: {
          STEP_DESCRIPTION: "Select appointment type",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CANCEL_MODAL: {
          MODAL_HEADING: "Are you sure you want to cancel this booking?",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          DONT_CANCEL_BOOKING_BTN: "@:COMMON.BTN.DO_NOT_CANCEL_BOOKING"
        },
        CHECK_ITEMS: {
          STEP_HEADING: "Review",
          BOOKING_QUESTIONS_HEADING: "Your Booking",
          NEXT_BTN: "@:COMMON.BTN.NEXT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CHECKOUT: {
          STEP_HEADING: "Payment",
          PAYMENT_DETAILS_HEADING: "Payment Details",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CHECKOUT_EVENT: {
          STEP_DESCRIPTION: "Please complete payment to confirm your booking.",
          TICKETS_HEADER: "@:COMMON.TERMINOLOGY.TICKETS",
          TYPE_COL_HEADING: "Type",
          PRICE_COL_HEADING: "@:COMMON.TERMINOLOGY.PRICE",
          QTY_COL_HEADING: "Qty",
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          BASKET_TOTAL_LBL: "@:COMMON.TERMINOLOGY.TOTAL",
          FOR_NUM_TICKETS: "(for {{count_as}})",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CLIENT: {
          STEP_HEADING: "Your Details",
          ADMIN_STEP_HEADING: "Customer Details"
        },
        COMPANY_CARDS: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        COMPANY_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CONFIRMATION: {
          TITLE: "@:COMMON.TERMINOLOGY.CONFIRMATION",
          BOOKING_CONFIRMATION: "Thanks {{member_name}}. Your booking is now confirmed. We have emailed you the details below.",
          WAITLIST_CONFIRMATION: "Thanks {{member_name}}. Your have successfully made the following bookings. We have you emailed you the details below.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          PURCHASE_REF_LBL: "Purchase Reference",
          BOOKING_REF_LBL: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DATE_TIME_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        MEMBER_LOGIN_FORM: {
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          PASSWORD_LBL: "@:COMMON.FORM.PASSWORD",
          PASSWORD_REQURIED: "@:COMMON.FORM.PASSWORD_REQUIRED",
          REMEMBER_ME: "Remember me",
          LOGIN_BTN: "@:COMMON.BTN.LOGIN"
        },
        MONTH_PICKER: {
          BACK_BTN: "Previous",
          NEXT_BTN: "Next"
        },
        POPOUT_EXPORT_BOOKING: {
          LONG_EXPORT_LBL: "Export to calendar",
          SHORT_EXPORT_LBL: "@:COMMON.TERMINOLOGY.EXPORT"
        },
        PRICE_FILTER: {
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        SERVICE_LIST_FILTER: {
          FILTER_HEADING: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          ANY_CATEGORY: "Any Category",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          SERVICE_PLACEHOLDER: "@:COMMON.TERMINOLOGY.SERVICE",
          RESET_BTN: "@:COMMON.TERMINOLOGY.RESET"
        },
        WEEK_CALENDAR: {
          NO_AVAILABILITY: "It looks like there's no availability for the next {time_range_length, plural, one{day} other{# days}}",
          NEXT_AVAIL_BTN: "Jump to Next Available Day",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          ANY_DATE: "- Any Date -",
          MORNING_HEADER: "@:COMMON.TERMINOLOGY.MORNING",
          AFTERNOON_HEADER: "@:COMMON.TERMINOLOGY.AFTERNOON",
          EVENING_HEADER: "@:COMMON.TERMINOLOGY.EVENING"
        },
        BASKET: {
          TITLE: "Your basket",
          ITEM_COL_HEADING: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_COL_HEADING: "@:COMMON.TERMINOLOGY.PRICE",
          RECIPIENT_LBL: "@:COMMON.TERMINOLOGY.RECIPIENT",
          GIFT_CERT_PAID_LBL: "Certificate Paid",
          GIFT_CERT_HEADING: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          ORIGINAL_PRICE_LBL: "Original Price",
          BOOKING_FEE_LBL: "@:COMMON.TERMINOLOGY.BOOKING_FEE",
          GIFT_CERT_TOTAL_LBL: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          GIFT_CERT_BALANCE_LBL: "Remaining Value on Gift Certificate",
          COUPON_DISCOUNT_LBL: "Coupon Discount",
          TOTAL_LBL: "@:COMMON.TERMINOLOGY.TOTAL",
          TOTAL_DUE_NOW_LBL: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          WALLET: {
            HEADING: "@:COMMON.TERMINOLOGY.WALLET",
            BALANCE_LBL: "Current Wallet Balance",
            BALANCE_INSUFFICIENT: "You do not currently have enough money in your wallet account. You can either pay the full amount, or top up to add more money to your wallet.",
            REMAINDER: "You will have {{remainder | currency}} left in your wallet after this purchase",
            TOP_UP_BTN: "@:COMMON.BTN.TOP_UP"
          },
          APPLY_COUPON_LBL: "Apply a coupon",
          APPLY_COUPON_BTN: "@:COMMON.BTN.APPLY",
          GIFT_CERTIFICATE: {
            QUESTION: "Have a gift certificate?",
            APPLY_LBL: "Apply a Gift Certificate",
            APPLY_ANOTHER_LBL: "Apply another Gift Certificate",
            CODE_PLACEHOLDER: "Enter a certificate code",
            APPLY_BTN: "@:COMMON.BTN.APPLY"
          },
          ADD_ANOTHER_BTN: "Add another item",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_SUMMARY: {
          STEP_HEADING: "Summary",
          STEP_DESCRIPTION: "Please review the following information",
          DATE_TIME_LBL: "@:COMMON.TERMINOLOGY.DATE_TIME",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          NAME_LBL: "@:COMMON.TERMINOLOGY.NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          ADDRESS_LBL: "@:COMMON.FORM.ADDRESS",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CONFIRM_BTN: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BOOK_WAITLIST: {
          STEP_HEADING: "Your Waitlist {num_bookings, plural =1{Booking} other{Bookings}}",
          BOOKING_REF_LBL: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DATE_TIME_LBL: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          TOTAL_LBL: "@:COMMON.TERMINOLOGY.TOTAL",
          TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          BOOKING_CONFIRMATION: "Thanks {{member_name}}. You have successully booked onto {{purchase_item}}.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        ERROR_MODAL: {
          OK_BTN: "@:COMMON.BTN.OK"
        },
        MEMBER_FORM: {
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PHONE_LBL: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          SAVE_BTN: "@:COMMON.BTN.SAVE"
        },
        BASKET_WALLET: {
          STEP_HEADING: "Make Payment",
          SHOW_TOP_UP_FORM_BTN: "@:COMMON.BTN.TOP_UP",
          TOP_UP_BTN: "Top up Wallet",
          AMOUNT_BY_LBL: "Amount",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          MINIMUM_AMOUNT_WARNING: "Minimum top up amount must be greater than {{min_amount | currency}}",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DASH: {
          TITLE: "Dashboard",
          DESCRIPTION: "Pick a Location/Person"
        },
        MONTH_CALENDAR: {
          PREV_MONTH_BTN: "Previous Month",
          NEXT_MONTH_BTN: "Next Month",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DEAL_LIST: {
          HEADING: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BUY_GIFT_CERT_BTN: "Buy Gift Certificates",
          SELECTED_CERTS_HEADING: "Selected Gift Certificates",
          CERTIFICATE_COL_HEADING: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_COL_HEADING: "@:COMMON.TERMINOLOGY.PRICE",
          RECIPIENT_FORM: {
            HEADING: "Add Recipient",
            RECIPIENT_NAME_LBL: "Recipient Name",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            ADD_RECIPIENT_BTN: "Add",
            RECIPIENT_NAME_REQUIRED: "Please enter your name",
            RECIPIENT_EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED"
          },
          RECIPIENT_HEADING: "@:COMMON.TERMINOLOGY.RECIPIENT",
          RECIPIENT_NAME_LBL: "Name",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          BUY_BTN: "Buy",
          BACK_BTN: "@:COMMON.BTN.BACK",
          CERT_NOT_SELECTED_ALERT: "You need to select at least one Gift Certificate to continue"
        },
        DURATION_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DURATON_NOT_SELECTED_ALERT: "You need to select a duration"
        },
        EVENT: {
          EVENT_DETAILS_HEADING: "Event details",
          TICKET_TYPE_COL_HEADING: "Type",
          TICKET_PRICE_COL_HEADING: "@:COMMON.TERMINOLOGY.PRICE",
          TICKET_QTY_COL_HEADING: "Qty",
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          EVENT_SOLD_OUT: "Sold Out",
          ADD_ONS_LBL: "Add-ons",
          SUBTOTAL_LBL: "Subtotal",
          GIFT_CERT_LBL: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATE",
          DISCOUNT_LBL: "Discount",
          BASKET_TOTAL_LBL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_LBL: "Total Due",
          CUSTOMER_DETAILS_HEADING: "Your details",
          TICKET_ACCORDION: {
            HEADING: "Ticket {num_tickets, plural, =0{details} other{{ticket_number} details}}",
            ATTENDEE_IS_YOU_QUESTION: "Are you the attendee?",
            ATTENDEE_USE_MY_DETAILS: "Yes, use my details",
            FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
            LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID"
          },
          T_AND_C_LBL: "@:COMMON.FORM.TERMS_AND_CONDITIONS",
          T_AND_C_REQUIRED: "@:COMMON.FORM.TERMS_AND_CONDITIONS_REQUIRED",
          RESERVE_TICKET_BTN: "Reserve {num_tickets, plural, =0{Ticket} one{Ticket} other{Tickets}}",
          JOIN_WAITLIST_BTN: "Join Waitlist",
          BOOK_TICKET_BTN: "Book {num_tickets, plural, =0{Ticket} one{Ticket} other{Tickets}}",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        EVENT_GROUP_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        EVENT_LIST: {
          HEADING: "Events at {{company_name}}",
          FILTER: {
            HEADING: "@:COMMON.TERMINOLOGY.FILTER",
            CATEGORY_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
            ANY_CATEGORY_OPTION: "- Any Category -",
            ANY_OPTION: "- Any {{filter_name}} -",
            PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
            ANY_PRICE_OPTION: "- Any Price -",
            DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
            DATE_PICKER_HEADING: "Pick date",
            DATE_PICKER_PLACEHOLDER: "- Any Date -",
            HIDE_FULLY_BOOKED_EVENTS: "Hide Fully Booked Events",
            SHOW_FULLY_BOOKED_EVENTS: "Show Fully Booked Events",
            RESET_FILTER_BTN: "@:COMMON.TERMINOLOGY.RESET",
            NO_FILTER_APPLIED: "Showing all events",
            FILTER_APPLIED: "Showing filtered events"
          },
          NO_EVENTS: "No events found",
          SPACES_LEFT: "{spaces_left, plural, =0{No spaces} one{# space} other{# spaces}} left",
          PRICE_FROM: "From {{min_ticket_price | ipretty_price}}",
          BOOK_EVENT_BTN: "@:COMMON.BTN.BOOK_EVENT",
          EVENT_SOLD_OUT: "Sold out",
          JOIN_WAITLIST_BTN: "Join Waitlist",
          MORE_INFO: "More Info",
          LESS_INFO: "Less Info",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        MAIN: {
          POWERED_BY: "Bookings powered by"
        },
        MAP: {
          SEARCH_LBL: "@:COMMON.TERMINOLOGY.SEARCH",
          SEARCH_BTN: "@:COMMON.TERMINOLOGY.SEARCH",
          SEARCH_PLACEHOLDER: "Enter a town, city, postcode or store",
          GEOLOCATE_BTN_HEADING: "Use current location",
          SEARCH_RESULT_SUMMARY: "{results, plural, =0{No results} one{1 result} other{# results}} for stores near {address}",
          HIDE_STORES_LBL: "Hide stores with no availability",
          SERVICE_UNAVAILABLE: "Sorry, but {{name}} is not available at this location",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          STORE_ACCORDION: {
            SELECT_BTN: "@:COMMON.BTN.SELECT",
            SERVICE_UNAVAILABLE: "Sorry, but {{name}} is not available at this location"
          }
        },
        MEMBERSHIP_LEVELS: {
          STEP_HEADING: "Membership Types",
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        LOGIN: {
          HEADING: "Login",
          NO_ACCOUNT: "Don't have an account?",
          REGISTER_BTN: "Register"
        },
        TIME: {
          PREV_DAY_BTN: "Previous Day",
          NEXT_DAY_BTN: "Next Day",
          NO_AVAILABILITY: "No availability",
          BACK_BTN: "@:COMMON.BTN.BACK",
          TIME_NOT_SELECTED_ALERT: "Please select a time slot",
          MORNING_HEADER: "@:COMMON.TERMINOLOGY.MORNING",
          AFTERNOON_HEADER: "@:COMMON.TERMINOLOGY.AFTERNOON",
          EVENING_HEADER: "@:COMMON.TERMINOLOGY.EVENING"
        },
        SURVEY: {
          SURVEY_THANK_YOU: "Thank you for filling out the survey!",
          SESSION_LBL: "@:COMMON.TERMINOLOGY.SESSION",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          SURVEY_QUESTIONS_HEADING: "Survey Questions",
          SUBMIT_SURVEY_BTN: "@:COMMON.BTN.SUBMIT",
          NO_QUESTIONS: "No survey questions for this session."
        },
        SERVICE_LIST: {
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        SERVICES: {
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        RESOURCE_LIST: {
          STEP_DESCRIPTION: "Select a resource to continue making a booking.",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESCHEDULE_REASONS: {
          MOVE_HEADING: "Move Appointment",
          MOVE_REASON: "Please select a reason for moving your appointment:",
          MOVE_BTN: "Move Appointment"
        },
        PURCHASE: {
          CANCEL_CONFIRMATION_HEADING: "Your booking has been cancelled.",
          HEADING: "Your {{service_name}} booking",
          CUSTOMER_NAME_LBL: "@:COMMON.TERMINOLOGY.NAME",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          MOVE_BOOKING_BTN: "Move booking",
          BOOK_WAITLIST_ITEMS_BTN: "Book Waitlist Items"
        },
        PRINT_PURCHASE: {
          TITLE: "Booking Confirmation",
          BOOKING_CONFIRMATION: "Thanks {{member_name}}. Your booking is now confirmed. We have emailed you the details below.",
          EXPORT_BOOKING_BTN: "@:COMMON.TERMINOLOGY.EXPORT",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          DATE_TIME_LBL: "@:COMMON.TERMINOLOGY.DATE_TIME",
          QTY_LBL: "Quantity",
          BOOKING_REFERENCE_LBL: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          POWERED_BY: "Bookings powered by"
        },
        PERSON_LIST: {
          STEP_DESCRIPTION: "Select a person to continue making a booking.",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DAY: {
          STEP_HEADING: "Select a day",
          WEEK_BEGINNING_LBL: "Week beginning:",
          SELECT_DATE_BTN_HEADING: "Pick a date",
          PREVIOUS_5_WEEKS_BTN: "Previous 5 Weeks",
          NEXT_5_WEEKS_BTN: "Next 5 Weeks",
          LEGEND: {
            HEADING: "Key",
            AVAILABLE_KEY: "{number, plural, =0{No availability} other{# available}}",
            UNAVAILABLE_KEY: "@:COMMON.TERMINOLOGY.UNAVAILABLE"
          },
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        REGISTER: {
          HEADING: "Register",
          REGISTER_BTN: "Register"
        },
        MAIN_ACCOUNT: {
          ACCOUNT_TAB_HEADING: "Account",
          UPCOMING_BOOKINGS_TAB_HEADING: "Upcoming Bookings",
          PAST_BOOKINGS_TAB_HEADING: "Past Bookings",
          WALLET_TAB_HEADING: "Wallet"
        },
        ACCOUNT: {
          HEADING: "My Details"
        },
        CLIENT_FORM: {
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_REQUIRED: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_REQUIRED: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_REQUIRED",
          PASSWORD_LBL: "@:COMMON.FORM.PASSWORD",
          PASSWORD_REQUIRED: "@:COMMON.FORM.PASSWORD_REQUIRED",
          PASSWORD_REQUIRED: "@:COMMON.FORM.PASSWORD_REQUIRED",
          CONFIRM_PASSWORD_LBL: "@:COMMON.FORM.CONFIRM_PASSWORD",
          PASSWORD_MISMATCH: "@:COMMON.FORM.PASSWORD_MISMATCH",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          MOBILE_INVALID: "@:COMMON.FORM.MOBILE_INVALID",
          PHONE_LBL: "@:COMMON.TERMINOLOGY.PHONE",
          PHONE_INVALID: "@:COMMON.FORM.PHONE_INVALID",
          ADDRESS_LBL: "@:COMMON.TERMINOLOGY.ADDRESS1",
          ADDRESS_REQUIRED: "@:COMMON.FORM.ADDRESS_REQUIRED",
          ADDRESS_3_LBL: "@:COMMON.TERMINOLOGY.ADDRESS3",
          ADDRESS_4_LBL: "@:COMMON.TERMINOLOGY.ADDRESS4",
          ADDRESS_5_LBL: "@:COMMON.FORM.ADDRESS5",
          POSTCODE_LBL: "@:COMMON.TERMINOLOGY.POSTCODE",
          POSTCODE_INVALID: "@:COMMON.FORM.POSTCODE_INVALID",
          CLIENT_QUESTIONS_HEADING: "Additional Information",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          NEXT_BTN: "@:COMMON.BTN.NEXT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        }
      }
    };
    $translateProvider.translations("en", translations);
  });

}).call(this);

(function() {
  'use strict';
  angular.module('BB.Services').config(function($translateProvider) {
    'ngInject';
    var translations;
    translations = {
      PUBLIC_BOOKING: {
        ACCORDION_RANGE_GROUP: {
          AVAILABLE: "{SLOTS_NUMBER, plural, =0{no time} =1{1 time} other{{SLOTS_NUMBER} times}} available"
        },
        ITEM_DETAILS: {
          MOVE_BOOKING_SUCCESS_ALERT: "Your booking has been moved to {{datetime}}",
          MOVE_BOOKING_FAIL_ALERT: "Failed to move booking. Please try again."
        },
        ADD_RECIPIENT: {
          MODAL_HEADING: "@:COMMON.TERMINOLOGY.RECIPIENT",
          WHO_TO_QUESTION: "Who should we send the gift voucher to?",
          WHO_TO_OPTION_ME: "Me",
          WHO_TO_OPTION_NOT_ME: "Someone else",
          NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          NAME_VALIDATION_MSG: "Please enter the recipient's full name",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          ADD_LBL: "Add Recipient",
          CANCEL_LBL: "@:COMMON.BTN.CANCEL"
        },
        BASKET_DETAILS: {
          STEP_HEADING: "Basket Details",
          BASKET_DETAILS_NO: "No items added to basket yet.",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          BASKET_ITEM_APPOINTMENT: "@:COMMON.TERMINOLOGY.APPOINTMENT",
          TIME_AND_DURATION: "{{time | datetime: 'LLLL'}} for {{duration | time_period}}",
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BASKET_STATUS: "{N, plural, =0 {empty}, one {One item in your basket}, other {#items in your basket}}"
        },
        BASKET_ITEM_SUMMARY: {
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          RESOURCE_LBL: "@:COMMON.TERMINOLOGY.RESOURCE",
          PERSON_LBL: "@:COMMON.TERMINOLOGY.PERSON",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME"
        },
        CALENDAR: {
          NEXT_BTN: "@:COMMON.BTN.NEXT",
          MOVE_BOOKING_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CATEGORY: {
          APPOINTMENT_TYPE: "Select appointment type",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CANCEL_MODAL: {
          CANCEL_QUESTION: "Estás seguro que deseas cancelar tu cita",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          DONT_CANCEL_BOOKING_BTN: "@:COMMON.BTN.DO_NOT_CANCEL_BOOKING"
        },
        CHECK_ITEMS: {
          REVIEW: "Revisar Cita",
          DETAILS_HEADING: "Tus detalles",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_REQUIRED",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          ITEM_DETAILS: {
            BOOKING_QUESTIONS_HEADING: "Other information",
            FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
            REQUIRED_FIELDS: "@:COMMON.FORM.REQUIRED"
          },
          NEXT_BTN: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CHECKOUT: {
          PAYMENT_WORD: "Payment",
          PAYMENT_DETAILS_HEADING: "Payment Details",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CHECKOUT_EVENT: {
          EVENT_PAYMENT: "Please complete payment to confirm your booking",
          EVENT_TICKETS: "@:COMMON.TERMINOLOGY.TICKETS",
          ITEM_TYPE: "Type",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          ITEM_QTY: "Qty",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          COUNT_AS: "for {{count_as}}",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CLIENT: {
          DETAILS_HEADING: "Tus detalles",
          CLIENT_DETAILS_HEADING: "Client details",
          REQUIRED_FIELDS: "@:COMMON.FORM.REQUIRED",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          BOOKING_QUESTIONS_HEADING: "Otra información",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          PROGRESS_CONTINUE: "@:COMMON.BTN.NEXT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          PROGRESS_CLEAR: "@:COMMON.BTN.CLEAR"
        },
        COMPANY_CARDS: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        COMPANY_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CONFIRMATION: {
          TITLE: "Confirmación de cita",
          BOOKING_CONFIRMATION: "Gracias {{name}}, tu cita ha sido confirmada. Hemos enviado los detalles vía correo electrónico",
          ITEM_CONFIRMATION: "Confirmación",
          WAITLIST_CONFIRMATION: "Gracias {{name}}, las citas fueron calendarizadas exitosamente. Hemos enviado los detalles vía correo electrónico",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        MEMBER_LOGIN_FORM: {
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          PASSWORD_LBL: "@:COMMON.FORM.PASSWORD",
          PASSWORD_REQURIED: "Please enter your password",
          REMEMBER_ME: "Remember me",
          LOGIN: "@:COMMON.BTN.LOGIN"
        },
        MONTH_PICKER: {
          BACK_BTN: "Anterior",
          NEXT_BTN: "Siguiente"
        },
        POPOUT_EXPORT_BOOKING: {
          LONG_EXPORT_LBL: "Export to calendar",
          SHORT_EXPORT_LBL: "@:COMMON.TERMINOLOGY.EXPORT"
        },
        PRICE_FILTER: {
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        SERVICE_LIST_FILTER: {
          FILTER: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_FILTER_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY: "@:COMMON.TERMINOLOGY.ANY",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          ITEM_SERVICE_PLACEHOLDER: "@:COMMON.TERMINOLOGY.SERVICE",
          FILTER_RESET: "@:COMMON.TERMINOLOGY.RESET"
        },
        WEEK_CALENDAR: {
          ALL_TIMES_IN: "All times are shown in {{time_zone_name}}.",
          NO_AVAILABILITY: "It looks like there's no availability for the next {time_range_length, plural, one{day} other{# days}}",
          NEXT_AVAIL: "Jump to Next Available Day",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          ANY_DATE: "- Any Date -",
          MORNING_HEADER: "@:COMMON.TERMINOLOGY.MORNING",
          AFTERNOON_HEADER: "@:COMMON.TERMINOLOGY.AFTERNOON",
          EVENING_HEADER: "@:COMMON.TERMINOLOGY.EVENING"
        },
        BASKET: {
          BASKET_HEADING: "Your basket",
          BASKET_ITEM_NO: "There are no items in the basket",
          BASKET_ITEM_ADD_INSTRUCT: "Please press the add another item button if you wish to add a product or service",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BASKET_RECIPIENT: "@:COMMON.TERMINOLOGY.RECIPIENT",
          BASKET_CERTIFICATE_PAID: "Certificate Paid",
          BASKET_GIFT_CERTIFICATES: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BASKET_PRICE_ORIGINAL: "Original Price",
          BASKET_BOOKING_FEE: "@:COMMON.TERMINOLOGY.BOOKING_FEE",
          BASKET_GIFT_CERTIFICATES_TOTAL: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BASKET_GIFT_CERTIFICATE_BALANCE: "Remaining Value on Gift Certificate",
          BASKET_COUPON_DISCOUNT: "Coupon Discount",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          BASKET_WALLET_BALANCE: "Current Wallet Balance",
          BASKET_WALLET_BALANCE_INSUFFICIENT: "You do not currently have enough money in your wallet account. You can either pay the full amount, or top up to add more money to your wallet.",
          BASKET_WALLET_REMAINDER_PART_ONE: "You will have",
          BASKET_WALLET_REMAINDER_PART_TWO: "left in your wallet after this purchase",
          BASKET_WALLET_TOP_UP: "@:COMMON.BTN.TOP_UP",
          BASKET_COUPON_APPLY: "Apply a coupon",
          APPLY_BTN: "@:COMMON.BTN.APPLY",
          VOUCHER_BOX: {
            BASKET_GIFT_CERTIFICATE_QUESTION: "Have a gift certificate?",
            BASKET_GIFT_CERTIFICATE_APPLY: "Apply a Gift Certificate",
            BASKET_GIFT_CERTIFICATE_APPLY_ANOTHER: "Apply another Gift Certificate",
            VOUCHER_CODE_PLACEHOLDER: "Enter a voucher code",
            APPLY_BTN: "@:COMMON.BTN.APPLY"
          },
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          BASKET_ITEM_ADD: "Add another item",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_SUMMARY: {
          STEP_HEADING: "Summary",
          STEP_DESCRIPTION: "Please review the following information",
          ITEM_DATE_AND_OR_TIME: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          NAME_LBL: "@:COMMON.TERMINOLOGY.NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          ADDRESS_LBL: "@:COMMON.FORM.ADDRESS",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CONFIRM_BTN: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_WAITLIST: {
          WAITLIST_BOOKING_HEADING: "Your Waitlist booking",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          ITEM_DATE_AND_OR_TIME: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          CONFIRMATION_SUMMARY: {
            BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
            BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW"
          },
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          CONFIRMATION_WAITLIST_SUBHEADER: "Thanks {{member_name}}. You have successully booked onto {{purchase_item}}.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        ERROR_MODAL: {
          OK_BTN: "@:COMMON.BTN.OK"
        },
        MEMBER_FORM: {
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PHONE_LBL: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          SAVE_BTN: "@:COMMON.BTN.SAVE"
        },
        BASKET_WALLET: {
          BASKET_WALLET_MAKE_PAYMENT: "Make Payment",
          BASKET_WALLET_SHOW_TOP_UP_BOX: "@:COMMON.BTN.TOP_UP",
          BASKET_WALLET_TOP_UP: "@:COMMON.BTN.TOP_UP",
          BASKET_WALLET_AMOUNT: "Amount",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          BASKET_WALLET_AMOUNT_MINIMUM: "Minimum top up amount must be greater than",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DASH: {
          DASHBOARD: "Dashboard",
          DASHBOARD_HEADING: "Pick a Location/@:COMMON.TERMINOLOGY.SERVICE"
        },
        DAY: {
          PREV_MONTH_BTN: "Previous Month",
          NEXT_MONTH_BTN: "Next Month",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DATE_NOT_SELECTED: "You need to select a date"
        },
        DEAL_LIST: {
          BASKET_GIFT_CERTIFICATE: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BUY_GIFT_CERT_BTN: "Buy Gift Certificates",
          BASKET_GIFT_CERTIFICATE_SELECTED: "Selected Gift Certificates",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          FORM: {
            RECIPIENT_ADD: "Add Recipient",
            RECIPIENT_NAME: "Recipient Name",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            PROGRESS_ADD: "Add",
            RECIPIENT_NAME_REQUIRED: "Please enter your name",
            RECIPIENT_EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED"
          },
          RECIPIENT: "@:COMMON.TERMINOLOGY.RECIPIENT",
          RECIPIENT_NAME: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PROGRESS_BUY: "Buy",
          BACK_BTN: "@:COMMON.BTN.BACK",
          CERT_NOT_SELECTED_ALERT: "You need to select at least one Gift Certificate to continue"
        },
        DURATION_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DURATON_NOT_SELECTED_ALERT: "You need to select a duration"
        },
        EVENT: {
          EVENT_DETAILS_HEADING: "Course details",
          ITEM_TYPE: "Type",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          ITEM_QTY: "Qty",
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          EVENT_SOLD_OUT: "Sold Out",
          ADD_ONS: "Add-ons",
          SUBTOTAL: "Subtotal",
          BASKET_GIFT_CERTIFICATE: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATE",
          BASKET_DISCOUNT: "Discount",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_DUE_TOTAL: "Due Total",
          BASKET_GIFT_CERTIFICATE_QUESTION: "Have a gift certificate?",
          BASKET_GIFT_CERTIFICATE_APPLY: "Apply a gift Certificate",
          GIFT_CERTIFICATE_CODE_PLACEHOLDER: "Enter your certificate code",
          APPLY_BTN: "@:COMMON.BTN.APPLY",
          BASKET_GIFT_CERTIFICATES_APPLIED: "Gift Certificates applied",
          BASKET_REMOVE_DEAL: "Remove",
          BASKET_GIFT_CERTIFICATE_BALANCE: "Remaining Gift Certificate balance",
          DETAILS_HEADING: "Your details",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          STORE_PHONE: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_REQ_VALIDATION_MSG: "@:COMMON.TERMINOLOGY.MOBILE_REQUIRED",
          ADDRESS_LBL: "@:COMMON.TERMINOLOGY.ADDRESS1",
          ADDRESS_REQ_VALIDATION_MSG: "@:COMMON.TERMINOLOGY.MOBILE_REQUIRED",
          ADDRESS_3_LBL: "@:COMMON.TERMINOLOGY.ADDRESS3",
          ADDRESS_4_LBL: "@:COMMON.TERMINOLOGY.ADDRESS4",
          POSTCODE_LBL: "@:COMMON.TERMINOLOGY.POSTCODE",
          POSTCODE_INVALID: "@:COMMON.FORM.POSTCODE_INVALID",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          UIB_ACCORDION: {
            TICKET_WORD: "Ticket",
            DETAILS_WORD: "details",
            ATTENDEE_IS_YOU_QUESTION: "Are you the attendee?",
            ATTENDEE_USE_MY_DETAILS: "Yes, use my details",
            FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
            LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
            FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED"
          },
          T_AND_C_LBL: "@:COMMON.FORM.TERMS_AND_CONDITIONS",
          T_AND_C_REQUIRED: "@:COMMON.FORM.TERMS_AND_CONDITIONS_REQUIRED",
          TICKET_WORD: "Ticket",
          DETAILS_WORD: "details",
          RESERVE_TICKET: "Reserve Ticket",
          LETTER_S: "s",
          EVENT_JOIN_WAITLIST: "Join Waitlist",
          BOOK_TICKET: "@:COMMON.BTN.BOOK Ticket",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        EVENT_GROUP_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        EVENT_LIST: {
          TITLE: "Event at",
          FILTER: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_FILTER_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY_CATEGORY: "@:COMMON.TERMINOLOGY.ANY @:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY: "@:COMMON.TERMINOLOGY.ANY",
          FILTER_ANY_PRICE: '@:COMMON.TERMINOLOGY.ANY @:COMMON.TERMINOLOGY.PRICE',
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          HIDE_FULLY_BOOKED_EVENTS: "Hide Sold Out Events",
          SHOW_FULLY_BOOKED_EVENTS: "Show Sold Out Events",
          FILTER_RESET: "@:COMMON.TERMINOLOGY.RESET",
          FILTER_NONE: "Showing all events",
          FILTER_FILTERED: "Showing filtered events",
          EVENT_WORD: "@:COMMON.TERMINOLOGY.EVENTS",
          EVENT_NO: "No event found",
          EVENT_SPACE_WORD: "space",
          EVENT_LEFT_WORD: "left",
          PRICE_FROM: "From",
          BOOK_EVENT_BTN: "@:COMMON.BTN.BOOK_EVENT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          EVENT_SOLD_OUT: "Sold out",
          EVENT_JOIN_WAITLIST: "Join Waitlist"
        },
        MAIN: {
          POWERED_BY: "Bookings powered by"
        },
        MAP: {
          SEARCH_BTN: "Buscar",
          SEARCH_BTN: "Buscar",
          INPUT_PLACEHOLDER: "Ingresa una ciudad o código postal",
          GEOLOCATE_HEADING: "Use current location",
          STORE_RESULT_HEADING: "{results, plural, =0{No results} one{1 result} other{# results}} for stores near {address}",
          HIDE_STORES: "Hide stores with no availability",
          SERVICE_UNAVAILABLE: "Sorry, but {{name}} is not available at this location",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          UIB_ACCORDION: {
            SELECT_BTN: "@:COMMON.BTN.SELECT",
            SERVICE_UNAVAILABLE: "Sorry, but {{name}} is not available at this location"
          }
        },
        MEMBERSHIP_LEVELS: {
          STEP_HEADING: "Membership Types",
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        TIME: {
          PREV_DAY_BTN: "Previous Day",
          NEXT_DAY_BTN: "Next Day",
          NO_AVAILABILITY: "No @:COMMON.TERMINOLOGY.SERVICE Available",
          BACK_BTN: "@:COMMON.BTN.BACK",
          TIME_NOT_SELECTED_ALERT: "Please select a time slot",
          AVAIL_MORNING: "Mañana",
          AVAIL_AFTERNOON: "Tarde",
          AVAIL_EVENING: "Noche"
        },
        SURVEY: {
          SURVEY_THANK_YOU: "Thank you for filling out the survey!",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SESSION",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          SURVEY_QUESTIONS_HEADING: "Survey",
          DETAILS_QUESTIONS: "@:COMMON.TERMINOLOGY.QUESTIONS",
          SUBMIT_SURVEY_BTN: "@:COMMON.BTN.SUBMIT",
          NO_QUESTIONS: "No survey questions for this session."
        },
        SERVICE_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          SERVICE_LIST_NO: "No services match your filter criteria.",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESOURCE_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESCHEDULE_REASONS: {
          MOVE_HEADING: "Move Appointment",
          MOVE_REASON: "Please select a reason for moving your appointment:",
          MOVE_BTN: "Move Appointment"
        },
        PURCHASE: {
          CANCEL_CONFIRMATION_HEADING: "Tu cita ha sido cancelada.",
          HEADING: "Your {{ service_name }} booking",
          RECIPIENT_NAME: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          PRINT: " @:COMMON.TERMINOLOGY.PRINT",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          MOVE_BOOKING_BTN: "Move booking",
          BOOK_WAITLIST_ITEMS_BTN: "Book Waitlist Items"
        },
        PRINT_PURCHASE: {
          TITLE: "Booking Confirmation",
          BOOKING_CONFIRMATION: "Thanks {{ member_name }}. Your booking is now confirmed. We have emailed you the details below.",
          EXPORT_BOOKING_BTN: "@:COMMON.TERMINOLOGY.EXPORT",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          AND: "@:COMMON.TERMINOLOGY.AND",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          QTY_LBL: "Quantity",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          POWERED_BY: "Bookings powered by"
        },
        PERSON_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DAY: {
          STEP_HEADING: "Select a day",
          WEEK_BEGINNING_LBL: "Week beginning",
          SELECT_DATE_BTN_HEADING: "Pick a date",
          PREVIOUS_5_WEEKS_BTN: "Previous 5 Weeks",
          NEXT_5_WEEKS_BTN: "Next 5 Weeks",
          KEY: "Key",
          AVAILABLE: "Disponible",
          UNAVAILABLE: "@:COMMON.TERMINOLOGY.UNAVAILABLE",
          BACK_BTN: "@:COMMON.BTN.BACK"
        }
      }
    };
    $translateProvider.translations('es', translations);
  });

}).call(this);

(function() {
  'use strict';
  angular.module('BB.Services').config(function($translateProvider) {
    'ngInject';
    var translations;
    translations = {
      PUBLIC_BOOKING: {
        ACCORDION_RANGE_GROUP: {
          AVAILABLE: "{number, plural, =0{Aucun disponible} one{1 disponible} other{# disponibles}}"
        },
        ITEM_DETAILS: {
          MOVE_BOOKING_SUCCESS_ALERT: "Votre réservation a été déplacée au {{datetime}}",
          MOVE_BOOKING_FAIL_ALERT: "La réservation n'a pas pu être déplacée. Merci de réessayer"
        },
        ADD_RECIPIENT: {
          MODAL_HEADING: "@:COMMON.TERMINOLOGY.RECIPIENT",
          WHO_TO_QUESTION: "Pour qui est le cadeau ?",
          WHO_TO_OPTION_ME: "Moi",
          WHO_TO_OPTION_NOT_ME: "Quelqu'un d'autre",
          NAME_LBL: "Nom",
          NAME_VALIDATION_MSG: "Veuillez entrer le nom complet du destinataire",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          ADD_LBL: "Ajouter un destinataire",
          CANCEL_LBL: "@:COMMON.BTN.CANCEL"
        },
        BASKET_DETAILS: {
          STEP_HEADING: "Détails du panier",
          BASKET_DETAILS_NO: "Aucun élément dans votre panier.",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          BASKET_ITEM_APPOINTMENT: "@:COMMON.TERMINOLOGY.APPOINTMENT",
          TIME_AND_DURATION: "{{ time | datetime: 'LLLL':false}} pour {{ duration | time_period }}",
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BASKET_STATUS: "{N, plural, =0 {vide}, one {Un article dans votre panier}, other {# articles dans votre panier}}"
        },
        BASKET_ITEM_SUMMARY: {
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          RESOURCE_LBL: "@:COMMON.TERMINOLOGY.RESOURCE",
          PERSON_LBL: "@:COMMON.TERMINOLOGY.PERSON",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME"
        },
        CALENDAR: {
          NEXT_BTN: "@:COMMON.BTN.NEXT",
          MOVE_BOOKING_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CATEGORY: {
          APPOINTMENT_TYPE: "Type de rdv",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CANCEL_MODAL: {
          CANCEL_QUESTION: "Êtes-vous sûr que vous voulez annuler cette réservation?",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          DONT_CANCEL_BOOKING_BTN: "@:COMMON.BTN.DO_NOT_CANCEL_BOOKING"
        },
        CHECK_ITEMS: {
          REVIEW: "Examen",
          DETAILS_HEADING: "Détail de votre rendez-vous",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_REQUIRED",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          ITEM_DETAILS: {
            BOOKING_QUESTIONS_HEADING: "Autre Information",
            FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
            REQUIRED_FIELDS: "@:COMMON.FORM.REQUIRED"
          },
          NEXT_BTN: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CHECKOUT: {
          PAYMENT_WORD: "Paiement",
          PAYMENT_DETAILS_HEADING: "Détails de paiement",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CHECKOUT_EVENT: {
          EVENT_PAYMENT: "Merci de finir le paiement pour confirmer votre réservation",
          EVENT_TICKETS: "@:COMMON.TERMINOLOGY.TICKETS",
          ITEM_TYPE: "Type",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          ITEM_QTY: "Quantité",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          COUNT_AS: "for {{count_as}}",
          PAY_BTN: "@:COMMON.BTN.PAY"
        },
        CLIENT: {
          DETAILS_HEADING: "Vos coordonnées",
          CLIENT_DETAILS_HEADING: "Détails du client",
          REQUIRED_FIELDS: "@:COMMON.FORM.REQUIRED",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          BOOKING_QUESTIONS_HEADING: "Autre Information",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          PROGRESS_CONTINUE: "@:COMMON.BTN.NEXT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          PROGRESS_CLEAR: "@:COMMON.BTN.CLEAR"
        },
        COMPANY_CARDS: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        COMPANY_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        CONFIRMATION: {
          TITLE: "Confirmation de réservation",
          BOOKING_CONFIRMATION: "Merci {{member_name}}. Votre réservation est à présent confirmée. Nous vous avons envoyé par email les informations ci-dessous.",
          ITEM_CONFIRMATION: "Confirmation",
          WAITLIST_CONFIRMATION: "Merci {{ member_name }}. Votre réservation a été effectuée avec succès. Nous vous avons envoyé par email les informations ci-dessous.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        MEMBER_LOGIN_FORM: {
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          PASSWORD_LBL: "@:COMMON.FORM.PASSWORD",
          PASSWORD_REQURIED: "Veuillez entrer le mot de passe",
          REMEMBER_ME: "Rester connecter",
          LOGIN: "@:COMMON.BTN.LOGIN"
        },
        MONTH_PICKER: {
          BACK_BTN: "Précédent",
          NEXT_BTN: "Suivant"
        },
        POPOUT_EXPORT_BOOKING: {
          LONG_EXPORT_LBL: "Exporter vers un calendrier",
          SHORT_EXPORT_LBL: "@:COMMON.TERMINOLOGY.EXPORT"
        },
        PRICE_FILTER: {
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE"
        },
        SERVICE_LIST_FILTER: {
          FILTER: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_FILTER_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY: "@:COMMON.TERMINOLOGY.ANY",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          ITEM_SERVICE_PLACEHOLDER: "@:COMMON.TERMINOLOGY.SERVICE",
          FILTER_RESET: "@:COMMON.TERMINOLOGY.RESET"
        },
        WEEK_CALENDAR: {
          ALL_TIMES_IN: "Le fuseau horaire est {{time_zone_name}}.",
          NO_AVAILABILITY: "It looks like there's no availability for the next {time_range_length, plural, one{day} other{# days}}",
          NEXT_AVAIL: "Aller au prochain jour réservable",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          ANY_DATE: "- Any Date -",
          MORNING_HEADER: "@:COMMON.TERMINOLOGY.MORNING",
          AFTERNOON_HEADER: "@:COMMON.TERMINOLOGY.AFTERNOON",
          EVENING_HEADER: "@:COMMON.TERMINOLOGY.EVENING"
        },
        BASKET: {
          BASKET_HEADING: "Votre Panier",
          BASKET_ITEM_NO: "Aucun élément dans votre panier.",
          BASKET_ITEM_ADD_INSTRUCT: "Cliquez sur le bouton 'Ajouter un autre article' si vous souhaitez ajouter un autre produit ou service.",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BASKET_RECIPIENT: "@:COMMON.TERMINOLOGY.RECIPIENT",
          BASKET_CERTIFICATE_PAID: "Chèques-cadeaux payés",
          BASKET_GIFT_CERTIFICATES: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BASKET_PRICE_ORIGINAL: "Prix d'origine",
          BASKET_BOOKING_FEE: "@:COMMON.TERMINOLOGY.BOOKING_FEE",
          BASKET_GIFT_CERTIFICATES_TOTAL: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BASKET_GIFT_CERTIFICATE_BALANCE: "La valeur restante de vos chèques-cadeaux",
          BASKET_COUPON_DISCOUNT: "Coupon",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          BASKET_WALLET_BALANCE: "Balance du Portefeuille",
          BASKET_WALLET_BALANCE_INSUFFICIENT: "Oh non! Vous n'avez pas assez d'argent dans votre Portefeuille. Vous pouvez soit payer le montant intégral, soit recharger votre Portefeuille.",
          BASKET_WALLET_REMAINDER_PART_ONE: "Vous aurez encore ",
          BASKET_WALLET_REMAINDER_PART_TWO: " dans votre Portefeuille après cet achat",
          BASKET_WALLET_TOP_UP: "@:COMMON.BTN.TOP_UP",
          BASKET_COUPON_APPLY: "Appliquer un coupon",
          APPLY_BTN: "@:COMMON.BTN.APPLY",
          VOUCHER_BOX: {
            BASKET_GIFT_CERTIFICATE_QUESTION: "Avez-vous un chèque-cadeau?",
            BASKET_GIFT_CERTIFICATE_APPLY: "Utiliser un chèque-cadeau",
            BASKET_GIFT_CERTIFICATE_APPLY_ANOTHER: "Utiliser une autre chèque-cadeau",
            VOUCHER_CODE_PLACEHOLDER: "Enter a voucher code",
            APPLY_BTN: "@:COMMON.BTN.APPLY"
          },
          CANCEL_BTN: "@:COMMON.BTN.CANCEL",
          BASKET_ITEM_ADD: "Ajouter un autre élément",
          CHECKOUT_BTN: "@:COMMON.BTN.CHECKOUT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_SUMMARY: {
          STEP_HEADING: "Résumé",
          STEP_DESCRIPTION: "Merci de vérifier ces détails",
          ITEM_DATE_AND_OR_TIME: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          DURATION_LBL: "@:COMMON.TERMINOLOGY.DURATION",
          NAME_LBL: "@:COMMON.TERMINOLOGY.NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          ADDRESS_LBL: "@:COMMON.FORM.ADDRESS",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CONFIRM_BTN: "@:COMMON.BTN.CONFIRM",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        BASKET_WAITLIST: {
          WAITLIST_BOOKING_HEADING: "Votre réservation est sur liste d'attente",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          ITEM_DATE_AND_OR_TIME: "@:COMMON.TERMINOLOGY.@:COMMON.TERMINOLOGY.DATE_TIME",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          BOOK_BTN: "@:COMMON.BTN.BOOK",
          CONFIRMATION_SUMMARY: {
            BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
            BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW"
          },
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_TOTAL_DUE_NOW: "@:COMMON.TERMINOLOGY.TOTAL_DUE_NOW",
          CONFIRMATION_WAITLIST_SUBHEADER: "Merci d'avoir réservé {{ purchase_item }}, {{ member_name }}.",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        ERROR_MODAL: {
          OK_BTN: "@:COMMON.BTN.OK"
        },
        MEMBER_FORM: {
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PHONE_LBL: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_LBL: "@:COMMON.TERMINOLOGY.MOBILE",
          SAVE_BTN: "@:COMMON.BTN.SAVE"
        },
        BASKET_WALLET: {
          BASKET_WALLET_MAKE_PAYMENT: "effectuer le paiement",
          BASKET_WALLET_SHOW_TOP_UP_BOX: "@:COMMON.BTN.TOP_UP",
          BASKET_WALLET_TOP_UP: "@:COMMON.BTN.TOP_UP",
          BASKET_WALLET_AMOUNT: "Montant",
          BASKET_WALLET: "@:COMMON.TERMINOLOGY.WALLET",
          BASKET_WALLET_AMOUNT_MINIMUM: "Le montant de recharge minimum doit être supérieur",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DASH: {
          DASHBOARD: "Tableau de bord",
          DASHBOARD_HEADING: "Choisissez un emplacement / @:COMMON.TERMINOLOGY.SERVICE"
        },
        DAY: {
          PREV_MONTH_BTN: "Mois Précédent",
          NEXT_MONTH_BTN: "Mois suivant",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DATE_NOT_SELECTED: "Veuillez choisir une date"
        },
        DEAL_LIST: {
          BASKET_GIFT_CERTIFICATE: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATES",
          BUY_GIFT_CERT_BTN: "Acheter un chèque-cadeau",
          BASKET_GIFT_CERTIFICATE_SELECTED: "Chèques-cadeaux sélectionnés",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          FORM: {
            RECIPIENT_ADD: "Ajouter un destinataire",
            RECIPIENT_NAME: "Recipient Name",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            PROGRESS_ADD: "Ajouter",
            RECIPIENT_NAME_REQUIRED: "Ecrivez le nom complet du destinataire",
            RECIPIENT_EMAIL_REQUIRED: "@:COMMON.FORM.EMAIL_REQUIRED"
          },
          RECIPIENT: "@:COMMON.TERMINOLOGY.RECIPIENT",
          RECIPIENT_NAME: "@:COMMON.TERMINOLOGY.LAST_NAME",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          PROGRESS_BUY: "Acheter",
          BACK_BTN: "@:COMMON.BTN.BACK",
          CERT_NOT_SELECTED_ALERT: "Il vous faut au moins un chèque-cadeau pour continuer"
        },
        DURATION_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          DURATON_NOT_SELECTED_ALERT: "Merci de choisir une durée"
        },
        EVENT: {
          EVENT_DETAILS_HEADING: "Détails de l'événement",
          ITEM_TYPE: "Type",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          ITEM_QTY: "Qty",
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          EVENT_SOLD_OUT: "Sold Out",
          ADD_ONS: "Add-ons",
          SUBTOTAL: "Subtotal",
          BASKET_GIFT_CERTIFICATE: "@:COMMON.TERMINOLOGY.GIFT_CERTIFICATE",
          BASKET_DISCOUNT: "Discount",
          BASKET_TOTAL: "@:COMMON.TERMINOLOGY.TOTAL",
          BASKET_DUE_TOTAL: "Due Total",
          BASKET_GIFT_CERTIFICATE_QUESTION: "Have a gift certificate?",
          BASKET_GIFT_CERTIFICATE_APPLY: "Apply a gift Certificate",
          GIFT_CERTIFICATE_CODE_PLACEHOLDER: "Enter your certificate code",
          APPLY_BTN: "@:COMMON.BTN.APPLY",
          BASKET_GIFT_CERTIFICATES_APPLIED: "Gift Certificates applied",
          BASKET_REMOVE_DEAL: "Remove",
          BASKET_GIFT_CERTIFICATE_BALANCE: "Remaining Gift Certificate balance",
          DETAILS_HEADING: "Vos coordonnées",
          FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
          FIRST_NAME_VALIDATION_MSG: "@:COMMON.FORM.FIRST_NAME_REQUIRED",
          LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
          LAST_NAME_VALIDATION_MSG: "@:COMMON.FORM.LAST_NAME_REQUIRED",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
          STORE_PHONE: "@:COMMON.TERMINOLOGY.PHONE",
          MOBILE_REQ_VALIDATION_MSG: "@:COMMON.TERMINOLOGY.MOBILE_REQUIRED",
          ADDRESS_LBL: "@:COMMON.TERMINOLOGY.ADDRESS1",
          ADDRESS_REQ_VALIDATION_MSG: "@:COMMON.TERMINOLOGY.MOBILE_REQUIRED",
          ADDRESS_3_LBL: "@:COMMON.TERMINOLOGY.ADDRESS3",
          ADDRESS_4_LBL: "@:COMMON.TERMINOLOGY.ADDRESS4",
          POSTCODE_LBL: "@:COMMON.TERMINOLOGY.POSTCODE",
          POSTCODE_INVALID: "@:COMMON.FORM.POSTCODE_INVALID",
          FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED",
          UIB_ACCORDION: {
            TICKET_WORD: "Ticket",
            DETAILS_WORD: "details",
            ATTENDEE_IS_YOU_QUESTION: "Êtes-vous le participant?",
            ATTENDEE_USE_MY_DETAILS: " Utiliser mes coordonnées",
            FIRST_NAME_LBL: "@:COMMON.TERMINOLOGY.FIRST_NAME",
            LAST_NAME_LBL: "@:COMMON.TERMINOLOGY.LAST_NAME",
            EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
            EMAIL_INVALID: "@:COMMON.FORM.EMAIL_INVALID",
            FIELD_REQUIRED: "@:COMMON.FORM.FIELD_REQUIRED"
          },
          T_AND_C_LBL: "@:COMMON.FORM.TERMS_AND_CONDITIONS",
          T_AND_C_REQUIRED: "@:COMMON.FORM.TERMS_AND_CONDITIONS_REQUIRED",
          TICKET_WORD: "Ticket",
          DETAILS_WORD: "details",
          RESERVE_TICKET: "Reserve Ticket",
          LETTER_S: "s",
          EVENT_JOIN_WAITLIST: "Join Waitlist",
          BOOK_TICKET: "@:COMMON.BTN.BOOK Ticket",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        EVENT_GROUP_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        EVENT_LIST: {
          TITLE: "Evénements à",
          FILTER: "@:COMMON.TERMINOLOGY.FILTER",
          CATEGORY_FILTER_LBL: "@:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY_CATEGORY: "@:COMMON.TERMINOLOGY.ANY @:COMMON.TERMINOLOGY.CATEGORY",
          FILTER_ANY: "@:COMMON.TERMINOLOGY.ANY",
          FILTER_ANY_PRICE: '@:COMMON.TERMINOLOGY.ANY @:COMMON.TERMINOLOGY.PRICE',
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          HIDE_FULLY_BOOKED_EVENTS: "Cacher les événements indisponibles",
          SHOW_FULLY_BOOKED_EVENTS: "Afficher les événements indisponibles",
          FILTER_RESET: "@:COMMON.TERMINOLOGY.RESET",
          FILTER_NONE: "Tous les événements",
          FILTER_FILTERED: "Afficher les événements filtrés",
          EVENT_WORD: "@:COMMON.TERMINOLOGY.EVENTS",
          EVENT_NO: "Aucun événement trouvé",
          EVENT_SPACE_WORD: "place",
          EVENT_LEFT_WORD: "restant",
          PRICE_FROM: "À partir de",
          BOOK_EVENT_BTN: "@:COMMON.BTN.BOOK_EVENT",
          BACK_BTN: "@:COMMON.BTN.BACK",
          EVENT_SOLD_OUT: "Épuisé",
          EVENT_JOIN_WAITLIST: "S'inscrire sur la liste d'attente"
        },
        MAIN: {
          POWERED_BY: "Réservations par"
        },
        MAP: {
          SEARCH_BTN: "Rechercher",
          SEARCH_BTN: "Rechercher",
          INPUT_PLACEHOLDER: "Saisissez une ville, un code postal ou un magasin",
          GEOLOCATE_HEADING: "Utilisez votre emplacement actuel",
          STORE_RESULT_HEADING: "{results, plural, =0{Aucun réultat trouvé} one{1 résultat trouvé} other{# résultats trouvés}} pour les magasins à proximité de {address}",
          HIDE_STORES: "Masquer les magasins sans disponibilité",
          SERVICE_UNAVAILABLE: "Désolé mais {{name}} n'est pas disponible dans ce magasin",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          UIB_ACCORDION: {
            SELECT_BTN: "@:COMMON.BTN.SELECT",
            SERVICE_UNAVAILABLE: "Désolé mais {{name}} n'est pas disponible dans ce magasin"
          }
        },
        MEMBERSHIP_LEVELS: {
          STEP_HEADING: "Types d'adhésion",
          SELECT_BTN: "@:COMMON.BTN.SELECT"
        },
        TIME: {
          PREV_DAY_BTN: "Jour Précédent",
          NEXT_DAY_BTN: "Jour suivant",
          NO_AVAILABILITY: "Aucun @:COMMON.TERMINOLOGY.SERVICE disponible",
          BACK_BTN: "@:COMMON.BTN.BACK",
          TIME_NOT_SELECTED_ALERT: "Veuillez choisir un créneau",
          AVAIL_MORNING: "Matin",
          AVAIL_AFTERNOON: "Après-midi",
          AVAIL_EVENING: "Soir"
        },
        SURVEY: {
          SURVEY_THANK_YOU: "Merci d'avoir rempli le questionnaire !",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SESSION",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          SURVEY_QUESTIONS_HEADING: "Enquête",
          DETAILS_QUESTIONS: "@:COMMON.TERMINOLOGY.QUESTIONS",
          SUBMIT_SURVEY_BTN: "@:COMMON.BTN.SUBMIT",
          NO_QUESTIONS: "Aucune question de l'enquête pour cette session."
        },
        SERVICE_LIST: {
          PRICE_FREE: "@:COMMON.TERMINOLOGY.PRICE_FREE",
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          SERVICE_LIST_NO: "Aucun service ne répond à vos critères de filtrage.",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESOURCE_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        RESCHEDULE_REASONS: {
          MOVE_HEADING: "Déplacer le rendez-vous",
          MOVE_REASON: "Veuillez choisir une raison :",
          MOVE_BTN: "Déplacer"
        },
        PURCHASE: {
          CANCEL_CONFIRMATION_HEADING: "Votre réservation a été annulée.",
          HEADING: "Votre {{ service_name }} réservation",
          RECIPIENT_NAME: "@:COMMON.TERMINOLOGY.LAST_NAME",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          EMAIL_LBL: "@:COMMON.TERMINOLOGY.EMAIL",
          SERVICE_LBL: "@:COMMON.TERMINOLOGY.SERVICE",
          WHEN_LBL: "@:COMMON.TERMINOLOGY.WHEN",
          PRICE_LBL: "@:COMMON.TERMINOLOGY.PRICE",
          CANCEL_BOOKING_BTN: "@:COMMON.BTN.CANCEL_BOOKING",
          MOVE_BOOKING_BTN: "Modifier la réservation",
          BOOK_WAITLIST_ITEMS_BTN: "Réserver des articles en liste d'attente"
        },
        PRINT_PURCHASE: {
          TITLE: "Confirmation de réservation",
          BOOKING_CONFIRMATION: "Merci {{member_name}}. Votre réservation est à présent confirmée. Nous vous avons envoyé par email les informations ci-dessous.",
          EXPORT_BOOKING_BTN: "@:COMMON.TERMINOLOGY.EXPORT",
          PRINT_BTN: "@:COMMON.TERMINOLOGY.PRINT",
          AND: "@:COMMON.TERMINOLOGY.AND",
          ITEM_LBL: "@:COMMON.TERMINOLOGY.ITEM",
          DATE_LBL: "@:COMMON.TERMINOLOGY.DATE",
          TIME_LBL: "@:COMMON.TERMINOLOGY.TIME",
          QTY_LBL: "Quantité",
          BOOKING_REFERENCE: "@:COMMON.TERMINOLOGY.BOOKING_REF",
          POWERED_BY: "Réservations par"
        },
        PERSON_LIST: {
          SELECT_BTN: "@:COMMON.BTN.SELECT",
          BACK_BTN: "@:COMMON.BTN.BACK"
        },
        DAY: {
          STEP_HEADING: "Choisir jour",
          WEEK_BEGINNING_LBL: "La semaine commençant le",
          SELECT_DATE_BTN_HEADING: "Choisir une date",
          PREVIOUS_5_WEEKS_BTN: "5 semaines précédentes",
          NEXT_5_WEEKS_BTN: "5 semaines suivantes",
          KEY: "Clé",
          AVAILABLE: "{number, plural, =0{Aucun disponible} one{1 disponible} other{# disponibles}}",
          UNAVAILABLE: "@:COMMON.TERMINOLOGY.UNAVAILABLE",
          BACK_BTN: "@:COMMON.BTN.BACK"
        }
      }
    };
    $translateProvider.translations('fr', translations);
  });

}).call(this);
