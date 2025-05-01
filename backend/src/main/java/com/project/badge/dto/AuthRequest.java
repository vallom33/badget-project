// AuthRequest.java داخل package com.project.badge.dto
package com.project.badge.dto;

public class AuthRequest {
    private String username;
    private String password;

    // getters و setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
