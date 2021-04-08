<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';


new SendMail($_POST);

class SendMail
{

    private $post = [];
    private $host = 'smtp.gmail.com';
    private $port = 465;
    private $language = 'ru';
    private $charSet = 'UTF-8';

    // Данные от кого посылается письмо

    private $userFrom = 'noreplyjaydevs@gmail.com'; // mail
    private $userPasswordFrom = 'vditeljqwcgeygux'; // password from mail
    private $userNameFrom = 'Aiboost | "Try it now" form';
    private $recipients = [
        "alexander.tukaylo@jaydevs.com" => "Форма Aiboost"
    ];

    public function __construct($post) {

        $this->post = $post;
        if(!empty($this->post)) {
            $mail = $this->settings();
            if(is_object($mail)) {
                $mail = $this->content($mail);
                if(is_object($mail)) {
                    $mail = $this->sendMessage($mail);
                    print_r($mail);
                } else if(!empty($mail['success'])) {
                    $errorMessage = $mail['message'];
                }
            } else if(!empty($mail['success'])) {
                $errorMessage = $mail['message'];
            }
        } else {
            $errorMessage = 'Empty post';
        }
        if(!empty($errorMessage)) {
            file_put_contents(__DIR__ . '/logSendMessage.txt', $errorMessage . "\n", FILE_APPEND);
        }
    }

    private function settings() {

        $mail = new PHPMailer(true);
        try {
            // Настройки сервера
            $mail->setLanguage($this->language);
            $mail->isSMTP(); // Настройка почтовой программы на использование SMTP
            $mail->CharSet = $this->charSet;
            $mail->SMTPSecure = "ssl";
            $mail->SMTPDebug = 2; // debugging: 1 = errors and messages, 2 = messages only
            $mail->SMTPAuth = true; // authentication enabled
            $mail->Host = $this->host;
            $mail->Port = $this->port; // or 587
            $mail->IsHTML(true);
            $mail->Username = $this->userFrom; // SMTP пользователь
            $mail->Password = $this->userPasswordFrom; // SMTP пароль

            // Отправитель
            $mail->setFrom($this->userFrom, $this->userNameFrom);

            return $mail;
        } catch (Exception $e) {
            $resultFail = [
                'success' => true,
                'message' => 'Settings: ' . $e->getMessage(),
            ];
            return $resultFail;
        }
    }

    private function content($mail) {

        try {
            // Контент
            $table_style = "style='width:100%'";
            $td_style = "style='padding:10px;border:#e9e9e9 1px solid;font-size:15px;'";

            $subject = 'Aiboost '.date("Y-m-d H:i:s"); // Сообщение заголовка
            $subjectMail = 'Aiboost ' . date("Y-m-d H:i:s"); // Сообщение краткого описания
            $mail->Subject = $subject;

            $mail->Body .=
                "<table $table_style>
                  <tr style='background-color: #c1c1c1;'>
                    <td style='padding:10px;border:#e9e9e9 1px solid;font-size:15px;'><b>Тема: </b></td>
                    <td style='padding:10px;border:#e9e9e9 1px solid;font-size:15px;'><b>" . $subjectMail . "</b></td>
                  </tr>";

            foreach ( $this->post as $key => $value) {

                $name = $this->replaceName($key);
                if(!empty($name) && !empty($value)) {
                    $mail->Body .= "<tr><td $td_style>" . $name . "</td><td $td_style>" . $value . "</td></tr>";
                }
            }

            
            $mail->Body .= "</table>";

            $mail->AltBody = '';

            return $mail;
        } catch (Exception $e) {
            $resultFail = [
                'success' => true,
                'message' => 'Content: ' . $e->getMessage(),
            ];
            return $resultFail;
        }
    }

    private function replaceName($data) {
        if(!empty($data)) {
            switch ($data) {
                case 'try_email':
                    return 'E-mail';
                    break;
                default:
                    return $data;
            }
        }
        return false;
    }



    private function sendMessage($mail) {

        if(!empty($this->recipients)) {
            try {
                $errorMessage = '';
                foreach( $this->recipients as $email => $name ) {
                    $mail->addAddress($email, $name);
                    if( !$mail->send() ) {
                        $errorMessage .= "Ошибка: " . $mail->ErrorInfo . "<br>";
                    }
                    $mail->clearAddresses();
                }

                if(!empty($errorMessage)) {
                    return $errorMessage;
                } else {
                    return 'done';
                }
            } catch (Exception $e) {
                return 'Send: ' . $e->getMessage();
            }
        } else {
            return 'Mail where to send empty';
        }
    }
}