package com.klu.config;


import com.klu.filter.JwtFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilter() {
        FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();

        registrationBean.setFilter(new JwtFilter());
        registrationBean.addUrlPatterns("/secure/*"); // 👈 Only protect /secure paths
        registrationBean.setOrder(1); // Optional: order if multiple filters

        return registrationBean;
    }
}
