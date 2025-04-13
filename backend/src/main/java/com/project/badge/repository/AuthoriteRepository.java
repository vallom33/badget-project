package com.project.badge.repository;

import com.project.badge.model.Authorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthoriteRepository extends JpaRepository<Authorite, Long> {
}
