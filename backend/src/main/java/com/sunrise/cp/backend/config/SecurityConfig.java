package com.sunrise.cp.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Отключение CSRF
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/messages").permitAll() // Разрешить доступ к /messages
                .anyRequest().authenticated() // Остальные маршруты требуют авторизации
            )
            .httpBasic(httpBasic -> httpBasic.disable()) // Отключение базовой аутентификации
            .formLogin(formLogin -> formLogin.disable()); // Отключение стандартной формы входа

        return http.build();
    }
}
