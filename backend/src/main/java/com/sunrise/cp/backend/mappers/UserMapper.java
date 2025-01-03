package com.sunrise.cp.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.sunrise.cp.backend.dtos.SignUpDto;
import com.sunrise.cp.backend.dtos.UserDto;
import com.sunrise.cp.backend.entites.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
