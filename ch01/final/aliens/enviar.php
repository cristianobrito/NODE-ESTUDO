<?php
    require_once('src/PHPMailer.php');
    require_once('src/SMTP.php');
    require_once('src/Exception.php');
    require_once('src/PHPMailer.php');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);

    try{
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'britonano@gmail.com';
            $mail->Password = 'akilles1';
            $mail->Port     =587;

            $mail->setFrom('britonano@gmail.com');
            $mail->addAddress('britonano@gmail.com');
            $mail->addAddress('britonano@outlook.com');

            $mail->isHTML(true);
            $mail->Subject = 'teste de gmail pra estudar';
            $mail->Body    = 'Chegou o gmail de teste do <strong>testndo pela 2° vez</strong>';
            $mail->AltBody = 'chegou o email de teste';

            if($mail->send()){
                    echo 'email enviado com sucesso';
            }else{
                    echo 'email não enviado';
            }

    }catch(Exception $e){
            echo "erro ao enviar mensagem: {$mail->ErrorInfo}";
    }

?>