| Tecnologias utilizadas |
| --- |
| React.js |
| Vite |
| Emotion.js |

## Google Sheets (Apps Script) integration

The contact form now collects tracking fields automatically and can POST them to a Google Sheets Web App endpoint.

Collected fields include:
- utm_source, utm_medium, utm_campaign, utm_term, utm_content, utm_id
- gclid, fbclid, msclkid
- page_url, page_referrer
- submitted_at

### 1) Configure the endpoint URL

Create a `.env.local` at the project root (or use your existing environment file) with:

```
VITE_GSHEET_WEBAPP_URL="https://script.google.com/macros/s/xxxxxxxxxxxxxxxx/exec"
```

You can also copy from `.env.example`.

### 2) Minimal Google Apps Script backend

Create a new Apps Script project (script.google.com), paste this code, and deploy as a Web App (execute as Me, accessible by Anyone with the link):

```javascript
function doPost(e) {
	try {
		var body = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
		var ss = SpreadsheetApp.getActive();
		var sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads');

		// Ensure header
		var header = [
			'submitted_at','nome','telefone','tipoProduto','quantidadeProdutos',
			'utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id',
			'gclid','fbclid','msclkid','page_url','page_referrer'
		];
		if (sheet.getLastRow() === 0) sheet.appendRow(header);

		var row = [
			body.submitted_at || new Date().toISOString(),
			body.name || body.nome || '',
			body.tel || body.telefone || '',
			body.productType || body.tipoProduto || '',
			body.qtdLabel || body.quantidadeProdutos || '',
			body.utm_source || '', body.utm_medium || '', body.utm_campaign || '', body.utm_term || '', body.utm_content || '', body.utm_id || '',
			body.gclid || '', body.fbclid || '', body.msclkid || '', body.page_url || '', body.page_referrer || ''
		];
		sheet.appendRow(row);

		return ContentService.createTextOutput(JSON.stringify({ ok: true }))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (err) {
		return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
			.setMimeType(ContentService.MimeType.JSON);
	}
}
```

After deployment, copy the Web App URL and set it in `VITE_GSHEET_WEBAPP_URL`.


| Biblioteca utilizada |
| --- |
| Phosphor Icons |
| Swiper |
| Emotion js (styled, themeProvider) |
| React Hook Form |
| Path |
| React Router |
| React Router Dom |
| Polished |
| React SVG plugin |


| Dia | Tempo | Atividade |
| --- | --- | --- |
| Dia 1 | 2 horas | Baixando dependencias, definindo stack completa, montando arquitetura de páginas |
| Dia 2 | 2 horas | Criando components, base de dados |
Dia 3 - 3 horas, Criando a seção incial, declarado 2 helpers 'up' e 'down' para parametrizar medias querys, a logo foi vetorizada e transformada em path
Dia 4 - 2 Horas, criação da seção de indicação
