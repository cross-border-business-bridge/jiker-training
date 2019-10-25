
# shell commands 
All the resource is on https://github.com/jianhua1982/jiker-training, welcome you guys comments. 

### env 
All scripts run on CentOS 7.4. 

## curl
### test connectivity 
curl -I https://stackoverflow.com/

### test connectivity by proxy 
curl -x http://your_proxy:8080 https://stackoverflow.com/

### parse response 
curl -I -m 10 https://stackoverflow.com -o /dev/null  -s -w %{http_code}

Note: 
%{http_code} returns on first line of HTTP payload


## mail
### Principle 
1. sendmail is good, on my env I like mail command. 

2. Send email uses SMTP protocol, append necessary mail server info in /etc/mail.rc. 


### Usage
#### notify server problem by email. 
echo "[app.com] tomcat server error" | mail -s "[Emergency] $STATE = $counter" sender@vendor.com  && echo "Send email with success."

Note: 
Got the following warning "Error in certificate: Peer's certificate issuer is not recognized.", but email is sent out successfully.



