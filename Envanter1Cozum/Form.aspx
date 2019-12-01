<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Form.aspx.cs" Inherits="Envanter1Cozum.Form" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Envanter 1 - Çözüm </title>
    
    <link href="Stil.css" rel="stylesheet" type="text/css" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.datatables.net/1.10.20/css/dataTables.semanticui.min.css" rel="stylesheet" type="text/css" /> 

    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.semanticui.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.js" type="text/javascript"></script>
    
    <script src="app.js" type="text/javascript"></script>
</head>
<body> 
    <div class="container">
        <div>
            <table id="Envanter1" class="ui celled table" style="width:100%">
                <thead>
                    <tr>
                        <th></th>
                        <th>Kişi</th>
                        <th>T.C No</th>
                        <th>Telefon</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div id="popup_tel" class="modal"></div>
        <div id="popup_tc" class="modal"></div>
    </div>
</body>
</html>
