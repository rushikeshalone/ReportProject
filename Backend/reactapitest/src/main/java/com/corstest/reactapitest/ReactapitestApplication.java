package com.corstest.reactapitest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactapitestApplication {
	private static final Logger logger = LoggerFactory.getLogger(ReactapitestApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ReactapitestApplication.class, args);

		logger.info("Application run successful ...");
		logger.info("ReactapitestApplication started.............................>>");

	}

}
