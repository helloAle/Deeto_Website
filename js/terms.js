const markdownPt = `
# Política de Privacidade e Termos de Serviço – Deeto Jr

**Última atualização:** 25/06/2025

## 1. Sobre o Bot

O **Deeto Jr** é um bot de música para Discord, desenvolvido por **Deeto**, com o objetivo exclusivo de tocar músicas em canais de voz mediante comandos fornecidos por usuários.

## 2. Dados e Processamento

O bot **não coleta, armazena ou compartilha dados pessoais**. Para funcionar, ele processa temporariamente:

- Comandos enviados via chat
- Informações do canal de voz
- Link ou nome da música solicitada

Esses dados são usados somente no momento do comando e **não são armazenados**.

## 3. Serviços de Terceiros

Utilizamos a **API do YouTube** para buscar e reproduzir músicas. Ao usar o bot, você concorda com:

- [Termos de Serviço do YouTube](https://www.youtube.com/t/terms)
- [Política de Privacidade do Google](https://policies.google.com/privacy)

## 4. Uso Adequado

É proibido:

- Usar o bot para tocar conteúdo protegido sem permissão
- Praticar spam, assédio ou abuso

## 5. Responsabilidade

Não nos responsabilizamos por:

- Mau uso do bot
- Problemas causados por mudanças nas APIs
- Sanções no Discord causadas pelo uso do bot

## 6. Alterações

O bot ou os termos podem mudar sem aviso. Usar o bot após mudanças significa aceitação.

## 7. Contato

Email: [ale.oliveira.deet@gmail.com](mailto:ale.oliveira.deet@gmail.com)

---

Desenvolvido por **Deeto** – Brasil 🇧🇷
`;

const markdownEn = `
# Privacy Policy & Terms of Service – Deeto Jr

**Last updated:** 06/25/2025

## 1. About the Bot

**Deeto Jr** is a Discord music bot developed by **Deeto**, created exclusively to play music in voice channels upon user command.

## 2. Data and Processing

The bot **does not collect, store, or share personal data**. To function, it temporarily processes:

- Chat commands
- Voice channel info
- Requested music name or link

This data is used in real-time and **not stored**.

## 3. Third-Party Services

The bot uses the **YouTube API** to search and stream music. By using it, you agree to:

- [YouTube Terms of Service](https://www.youtube.com/t/terms)
- [Google Privacy Policy](https://policies.google.com/privacy)

## 4. Proper Use

You may not:

- Use the bot to stream copyrighted content without permission
- Engage in spam, harassment, or abusive behavior

## 5. Liability

The developer is not responsible for:

- Misuse of the bot
- Issues caused by API changes
- Discord sanctions related to the bot’s use

## 6. Changes

The bot and these terms may change at any time without notice. Continued use implies acceptance.

## 7. Contact

Email: [ale.oliveira.deet@gmail.com](mailto:ale.oliveira.deet@gmail.com)

---

Developed by **Deeto** – Brazil 🇧🇷
`;

const markdownzhcn = `
# 隐私政策与服务条款 – Deeto Jr

**最后更新日期：** 2025年6月25日

## 1. 关于该机器人

**Deeto Jr** 是一款由 **Deeto** 开发的 Discord 音乐机器人，唯一功能是根据用户的指令在语音频道中播放音乐。

## 2. 数据与处理

该机器人**不会收集、存储或分享任何个人数据**。为了运行，其临时处理以下信息：

- 聊天中发送的指令  
- 语音频道信息  
- 请求的音乐链接或名称  

这些数据**仅在执行指令时使用，且不会被存储**。

## 3. 第三方服务

我们使用 **YouTube API** 来搜索和播放音乐。使用该机器人即表示您同意：

- [YouTube 服务条款](https://www.youtube.com/t/terms)  
- [Google 隐私政策](https://policies.google.com/privacy)

## 4. 正确使用

禁止以下行为：

- 未经许可播放受版权保护的内容  
- 滥用、骚扰或发送垃圾信息  

## 5. 免责声明

我们不对以下情况负责：

- 用户的不当使用  
- 第三方 API 更改导致的问题  
- 使用机器人导致的 Discord 处罚  

## 6. 变更

本机器人及其条款可能随时变更，恕不另行通知。继续使用机器人即表示您接受这些变更。

## 7. 联系方式

电子邮箱：[ale.oliveira.deet@gmail.com](mailto:ale.oliveira.deet@gmail.com)

---

由 **Deeto** 开发 – 巴西 🇧🇷
`;

const contentEl = document.getElementById('markdown-content');
const selector = document.getElementById('language-selector');

function renderMarkdown(language) {
  const content = language === 'en' ? markdownEn : language === 'zh-cn' ? markdownzhcn : markdownPt;
  contentEl.innerHTML = marked.parse(content);
}

selector.addEventListener('change', (e) => {
  renderMarkdown(e.target.value);
});

// Renderiza inicialmente em português
renderMarkdown('pt');
