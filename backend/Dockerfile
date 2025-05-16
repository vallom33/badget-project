# استخدم صورة Maven + JDK 17 الرسمية
FROM maven:3.9.4-eclipse-temurin-17

# مجلد العمل داخل الحاوية
WORKDIR /app

# انسخ كل ملفات مشروعك إلى داخل الحاوية
COPY . .

# شغّل Spring Boot مباشرة باستخدام Maven وبروفايل prod
CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.profiles=prod"]
