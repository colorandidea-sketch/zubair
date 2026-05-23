function buildVCard() {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Waled Ibrahim',
    'TITLE:Sales Supervisor',
    'TEL;TYPE=CELL: +966555665230',
    'EMAIL;TYPE=INTERNET:zhameed@Tasalla.co',
    'ADR;TYPE=WORK:;;Riyadh - Saudi Arabia',
    'ORG:TASALIA',
    'END:VCARD'
  ];

  return lines.join('\n');
}

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('saveContactBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const vcf = buildVCard();
    downloadTextFile('Waled-Ibrahim.vcf', vcf);
  });
});