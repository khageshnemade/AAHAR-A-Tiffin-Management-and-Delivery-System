FROM maven:3.6-jdk-12-alpine as build

WORKDIR /wrk
COPY pom.xml .
COPY src src
RUN ls -la   # Add this line to list the contents of the directory
RUN mvn clean install


FROM adoptopenjdk/openjdk11:alpine-jre
EXPOSE 8082
COPY --from=build /wrk/target/TiffinManagementBackend.jar TiffinManagementBackend.jar
ENTRYPOINT ["java","-jar","/TiffinManagementBackend.jar"]