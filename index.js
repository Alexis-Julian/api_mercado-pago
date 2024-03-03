import fetch from "node-fetch";
const TOKEN =
	"TEST-624555574602310-030114-bda40f76e8a86554f914eed70053020c-1122822054";

const dataString = {
	file_name_prefix: "settlement-report-USER_ID",
	show_fee_prevision: false,
	show_chargeback_cancel: true,
	coupon_detailed: true,
	include_withdraw: true,
	shipping_detail: true,
	refund_detailed: true,
	display_timezone: "GMT-04",
	notification_email_list: ["alexisjrojas@hotmail.es", "john@example.com"],
	frequency: {
		hour: 0,
		type: "monthly",
		value: 1,
	},
	columns: [
		{
			key: "TRANSACTION_DATE",
		},
		{
			key: "SOURCE_ID",
		},
		{
			key: "EXTERNAL_REFERENCE",
		},
	],
};

const headers = {
	accept: "application/json",
	"content-type": "application/json",
	Authorization: `Bearer ${TOKEN}`,
};

const CREATE_CONFIG = {
	url: "https://api.mercadopago.com/v1/account/settlement_report/config",
	method: "POST",
	dataBody: JSON.stringify(dataString),
};

const LIST_CONFIG = {
	url: "https://api.mercadopago.com/v1/account/settlement_report/config",
	method: "GET",
};

// CREATE REPORT
const ReportString = {
	begin_date: "2024-02-23T00:00:00Z",
	end_date: "2024-03-01T00:00:00Z",
};

const CREATE_REPORT = {
	url: "https://api.mercadopago.com/v1/account/settlement_report",
	method: "POST",
	dataBody: JSON.stringify(ReportString),
};

async function GENERATE_FETCH({ url, method, dataBody }) {
	console.log(url);
	try {
		const response = await fetch(url, {
			method: method,
			headers: headers,
			body: dataBody,
		});
		// console.log(response);
		const data = await response.json();

		console.log(data);
	} catch (err) {
		console.log(err.message);
	}
}

GENERATE_FETCH(CREATE_REPORT);
// GENERATE_FETCH(LIST_CONFIG);
async function TEST() {
	try {
		const dataString = `access_token=${TOKEN}`;
		const response = await fetch(
			"https://api.mercadopago.com/v1/account/settlement_report/list",
			{
				headers: headers,
				// body: JSON.stringify(dataString),
			}
		);

		const data = await response.json();

		console.log(data);
	} catch (e) {
		console.log(e.message);
	}
}
// TEST();
