const nodemailer = require("nodemailer")
require("dotenv").config()
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env

var mailList = ["michael.babin@outlook.fr"]

const authData = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
})

exports.handler = async event => {
  const method = event.httpMethod
  const {
    fields: { firstName, lastName, email, phone, message },
  } = JSON.parse(event.body)
  const from = "michael.babin@griffincreative.ca"
  const emailSubject = "Formulaire de contact - Mizrahi Services Financiers"
  const data = {
    from: from,
    to: mailList,
    subject: emailSubject,
    text: ``,
    html: `<!DOCTYPE html>
                        <html lang="fr">
                            <head>
                                <meta http-equiv="content-type" content="text/html;charset=utf-8" />
                                <link rel="preconnect" href="https://fonts.gstatic.com">
                                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:ital@1&display=swap" rel="stylesheet">
                            </head>
                            <body bgcolor="#f2f2f2">
                                <table width="100%" bgcolor="#f2f2f2" border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse;" >
                                    <table width="668" bgcolor="#f9f9f9" border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse;" >
                                        <tr cellspacing="0" cellpadding="0" border="0" >
                                            <td cellspacing="0" width="668" height="166" cellpadding="0" border="0" align="center" style="background-color:#f9f9f9; color:black" >
                                                <table width="568" height="132" bgcolor="#20252a" border="0" cellspacing="0" cellpadding="0" align="center" style="border-top-right-radius:76px" >
                                                    <tr>
                                                        <td>
                                                            
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </table>
                                <table width="100%" bgcolor="#f2f2f2" border="0" cellspacing="0" cellpadding="0" align="center">
                                    <table width="668" bgcolor="#f9f9f9" border="0" cellspacing="0" cellpadding="0" align="center" style="padding-bottom:30px;padding-top:30px;">
                                        <tr>
                                            <td align="center">
                                                <table width="572" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td>
                                                            <table width="460" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <h2 style="font-family:'Poppins',sans-serif;font-size:13px;line-height:28px;color:#323132;text-align:left;text-transform:uppercase;letter-spacing:1px;font-weight:bold;padding-top:0px;padding-bottom:8px;">Vous avez reçu une demande d'information.</h2>
                                                                        <p style="font-family:'Poppins',sans-serif;font-size:15px;line-height:24px;color:#656465;font-weight:300;text-align:left;">Bonjour,</p>
                                                                        <p style="font-family:'Poppins',sans-serif;font-size:15px;font-weight:300;line-height:24px;color:#656465;text-align:justify;">Vous avez reçu une demande d'information via le formulaire de votre site web.
                                                                            <ul>
                                                                                <li>Nom: ${firstName} ${lastName}</li>
                                                                                <li>Courriel: ${email}</li>
                                                                                <li>Téléphone: ${phone}</li>
                                                                                <li>message: ${message}</li>
                                                                            </ul>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table width="460" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                <tr width="460">
                                                                    <td colspan="2" align="left">
                                                                        <h2 style="font-family:'Poppins',sans-serif;font-size:13px;line-height:32px;color:#000000;text-align:left;text-transform:uppercase;letter-spacing:2px;font-weight:bold;margin-top:15px;margin-bottom:5px;">Merci!</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <table width="100%" bgcolor="#f2f2f2" border="0" cellspacing="0" cellpadding="0" align="center">
                                        <tr>
                                            <td align="center" cellspacing="0" cellpadding="0" border="0" align="center">
                                                <table width="668" bgcolor="#f9f9f9" border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse;" >
                                                    <tr cellspacing="0" cellpadding="0" border="0" >
    
                                                    </tr>
                                                    <td cellspacing="0" width="668" height="120" cellpadding="0" border="0" align="center" style="background-color:#f9f9f9; color:black" >
                                                        <table width="568" height="90" bgcolor="#20252a" border="0" cellspacing="0" cellpadding="0" align="center" style="border-bottom-left-radius:76px">
                                                            <tr>
                                                                <td>
                                                                    <p style="color:rgba(0,0,0,0)">.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <small style="font-family:verdana,sans-serif;font-size:11px;line-height:16px;color:#656465;text-align:center;">Ne répondez pas à ce message &#8211; Les messages ne seront pas lus.</a></small>
                                            </td>
                                        </tr>
                                    </table>
                                </table>
                            </body>
                        </html>
    `,
    // attachments: [{
    //     path: change with file path
    // }]
  }
  if (method !== "POST") {
    return {
      statusCode: 405,
      body: "Only POST request allowed",
    }
  }
  try {
    await authData.sendMail({ ...data })
    return {
      statusCode: 200,
      body: "Success",
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    }
  }
}
// authData
//     .sendMail();
